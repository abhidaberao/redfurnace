import { useState } from "react";
import Navbar from "../../components/blocks/Navbar";
import ProfileFLoater from "../../components/blocks/ProfileFloater";
import SideBar from "../../components/blocks/Sidebar";
import SideFloater from "../../components/blocks/SideFloater";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import SearchBar from "../../components/ui/SearchBar";
import style from './AdminDash.module.scss'
//import {offers} from './_test_/TestData'
import { AiOutlineControl } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';


const ClerkDash = () => {
    let [PToggleState,setPToggleState] = useState(false);

    const toggleProfileFloater = () => {
        PToggleState = !PToggleState
        setPToggleState(PToggleState);
    }

    let [sectionIndex, setSectionIndex] = useState(0);

    const changeSectionIndex = (index:number) => {
        setSectionIndex(index);   
    }

    const tabBarItems = ['Clients','Employees','HSN','Materials','Storage','Furnaces'];
    const tabViews = [<ClientsSection/>];

  return (
    <div className={style['adm-dash']}>

        <Navbar profileToggleCallback={toggleProfileFloater} title="Admin Dashboard"/>
        <ProfileFLoater show={PToggleState}/>

        <div className={style['dash-container']}>

            <SideBar items={tabBarItems} sectionIndex={sectionIndex} changeSectionCallback={changeSectionIndex}/>

            {tabViews[sectionIndex]}

        </div>
    </div>
  );
}

// const OffersSection = () => {

//     const offerCards = () => {
//         return searchAndFilter(offers).map((o:any) => <Card
//         content={
//         <div>
//             <div>Order: #{o.orderNo}</div>
//             <div>Client: {o.clientName}</div>
//             <div>Status: {o.orderStatus}</div>
//         </div>
//         }
//         />);
//     }

//     let [searchQuery,setSearchQuery] = useState('');

//     const handleSearch = (e:any) => {
//         e.preventDefault();
//         setSearchQuery(e.target.value);
//     }

//     const searchAndFilter = (list:any) => {
//         return list.filter((item:any) => 
//         {
//             if(
//                 item.orderNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 item.orderStatus.toLowerCase().includes(searchQuery.toLowerCase()) 
//             ){
//                 return item;
//             }
//             else{
//                 return null;
//             }
//         });
//     }

//     let [FilterToggleState,setFilterToggleState] = useState(false);

//     const toggleFilterFloater = () => {
//         FilterToggleState = !FilterToggleState
//         setFilterToggleState(FilterToggleState);
//     }

//     let [CreateToggleState,setCreateToggleState] = useState(false);

//     const toggleCreateFloater = () => {
//         CreateToggleState = !CreateToggleState
//         setCreateToggleState(CreateToggleState);
//     }



//     return (
//         <div className={style['dash-body']}>
//     <SideFloater show={FilterToggleState} content={'filter'} toggle={toggleFilterFloater}/>
//     <SideFloater show={CreateToggleState} content={'create'} toggle={toggleCreateFloater}/>
//     <div className={style.padded}>
//         <div className={style.actions}>
//             <SearchBar handleChange={handleSearch}/>
//             <Button name={<AiOutlineControl size={22}/>} onClick={toggleFilterFloater} type="basic"/>
//             <Button name='New' onClick={toggleCreateFloater} type="accent"/>
//         </div>
//         {offerCards()}
//     </div>
// </div>
//     );
// }

const ClientsSection = () => {
    return (
    <div className={style['dash-body']}>
        <div className={style['empty-message']}>
            Nothing here yet.
        </div>
    </div>
    );
}

export default ClerkDash;
