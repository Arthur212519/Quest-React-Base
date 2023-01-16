import'./Text.css'


const Text =({text,color})=>{
    return <p className="text" style={{color:color,textTransform:'uppercase'}}>{text}</p>
    }

    export default Text