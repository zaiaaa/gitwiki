import { useState } from 'react';
import gitLogo from '../assets/github-logo.png'
import { Container } from './styles';
import Input from '../components/input';
import ItemRepo from '../components/itemRepo';
import Botao from '../components/button';
import { api } from '../services/api'


function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () =>{

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(e => e.id === data.id)
      
      if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }
      alert('Repositório não encontrado')
    

  }

  const handleRemoveRepo = (id) => {
    const filtro = repos.filter(e => e.id !== id)
    setRepos(filtro)
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Botao onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;


//zaiaaa/joken-po