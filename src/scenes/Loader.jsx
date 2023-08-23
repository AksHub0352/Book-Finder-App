import React, {useState} from 'react'
import './Loader.css'
import './SearchBar.jsx'
import './TopButton.js'
import TopButton from './TopButton.js';

function Loader(props) {

  const [result,setResult] = useState([]);

  return (
    <Card
        img={props?.book.volumeInfo.imageLinks?.thumbnail}
        title={props?.book.volumeInfo?.title}
        description={props?.book.searchInfo?.textSnippet}
        preview = {props?.book.volumeInfo?.previewLink}
      />
  );
}

function Card(props) {
  return (
    <>
    <div className="card text-black w-[250px] m-4">
      <div className="card__body">
        <img src={props.img || 'https://media.licdn.com/dms/image/C5612AQHE4cl2rEKbKw/article-cover_image-shrink_600_2000/0/1522693831084?e=2147483647&v=beta&t=zw8xyj1oV8P6i24AxOvYbk-4Tw0vdv7Ci14ULiY-2xE'} width="100%" alt='img'/>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn"><a target='_blank' href={props.preview}>Read More</a></button>
    </div>
    
      {/* <Footer/> */}
    <TopButton/>
    </>
  );
}


export default Loader;
