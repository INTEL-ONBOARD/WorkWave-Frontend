import React , {useState , useEffect} from 'react'; 
import View from './service-components/view';  
import Form from './service-components/form';  

const Services = () => {

    const [listView,setListView] = useState(true);

    const handleClick = () =>{
        setListView(false);
    };



    return (
        <>
            {
                listView ?( 
                <View onButtonClick={handleClick} />
                ):(
                    <Form/>
                )
            }


        </>

    );
}

export default Services;

{/* <i class="fi fi-rr-square-plus "></i> */}