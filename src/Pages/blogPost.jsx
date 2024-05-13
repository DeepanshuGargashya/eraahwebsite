import { useLocation } from 'react-router-dom'
import Latest1 from '../Assets/latest1.png'

function BlogPage(){
    const {state} =  useLocation()
    return (
        <>
        <div className="container blogPost">
            <img className='d-flex m-auto mb-4' style={{width:'100%'}} src={state.img} alt="" />
            <h2 className='text-center mb-3'>{state.title}</h2>
            <p>{state.subtitle}</p>


{state.desc.map((item,index)=>{
    return(
        <>
        <h5>{item.head}</h5>
        <ul>
        {item.body.map((item,index)=>{
            return(
                <li>{item}</li>
               
            )

        })}</ul>
        <p>{item.b}</p>
        </>
    )
})}
            {/* <p>{state.desc}</p> */}
            
            
            <p>{state.conclusion}</p>
            <p>{state.tags}</p>
            <h5>Sources</h5>
            <ul>
            {
            state.sources.map((item,index)=>{
                return(
                    <> <li><a href={item}>{item}</a></li></>
                )
            })
           }</ul>


        </div>
        </>
    )
}

export default BlogPage