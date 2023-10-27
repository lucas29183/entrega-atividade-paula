import React, { useState } from "react";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { ButtonStyle, ContainerCriarPost, FormStyle, InputStyle, TextareaStyle } from "./styles";
import Historicos from "../../componentes/Historicos/Historicos";
import { createPost } from "../../services/requests";
import { useVerificarToken } from "../../hooks/useverificarToken";

const CriarPost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState("")
  const[ hashtag, setHashtag] = useState("")

  const criarPostApo = async(e)=>{
    e.preventDeFault()
    if(!title || !content){
      alert("Título e conteudo são obrigatórios.")
    }

    const hashtagsArray = hashtag.split(",")

    await createPost(title, content, image, hashtagsArray)
    .then((response)=>{
      console.log("Post Criado com sucesso!", response)
    })
    .catch((error)=>{
      console.error("erro ao criar o post", error)
    })
  }


  useVerificarToken()
 
 
  return (
   <>
   criarpost
   </>
  );
};

export default CriarPost;
