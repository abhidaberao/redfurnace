import { useState } from "react";
import Navbar from "../../components/blocks/Navbar";
import ProfileFLoater from "../../components/blocks/ProfileFloater";
import SideBar from "../../components/blocks/Sidebar";
import SideFloater from "../../components/blocks/SideFloater";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import SearchBar from "../../components/ui/SearchBar";
import style from './ClerkDash.module.scss'
import {offers} from '../../_test_/TestData'
import { AiOutlineControl } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import OrderForm from "./OrderForm";


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

    const tabBarItems = ['Offers','Clients'];
    const tabViews = [<OffersSection/>,<ClientsSection/>];

  return (
    <div className={style['clerk-dash']}>

        <Navbar profileToggleCallback={toggleProfileFloater} title="Clerk Dashboard"/>
        <ProfileFLoater show={PToggleState}/>

        <div className={style['dash-container']}>

            <SideBar items={tabBarItems} sectionIndex={sectionIndex} changeSectionCallback={changeSectionIndex}/>

            {tabViews[sectionIndex]}

        </div>
    </div>
  );
}

const OffersSection = () => {

    const offerCards = () => {
        return searchAndFilter(offers).map((o:any,index:number) => <Card

        header={
        <div>
            <div>OrderId: {o.orderId}</div>
            <div>Client: {o.clientId}</div>
            <div>Status: {o.orderStatus}</div>
        </div>
        }

        body={'hello'}

        key={index}
        />);
    }

    let [searchQuery,setSearchQuery] = useState('');

    const handleSearch = (e:any) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    const searchAndFilter = (list:any) => {
        return list.filter((item:any) => 
        {
            if( true
                //item.orderNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                //item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                //item.orderStatus.toLowerCase().includes(searchQuery.toLowerCase()) 
            ){
                return item;
            }
            else{
                return null;
            }
        });
    }

    let [FilterToggleState,setFilterToggleState] = useState(false);

    const toggleFilterFloater = () => {
        FilterToggleState = !FilterToggleState
        setFilterToggleState(FilterToggleState);
    }

    let [CreateToggleState,setCreateToggleState] = useState(false);

    const toggleCreateFloater = () => {
        CreateToggleState = !CreateToggleState
        setCreateToggleState(CreateToggleState);
    }



    return (
        <div className={style['dash-body']}>
    <SideFloater show={FilterToggleState} title={'Filter'} content={'filter'} toggle={toggleFilterFloater}/>
    <SideFloater show={CreateToggleState} title={'Create New Offer'} content={<OrderForm/>} toggle={toggleCreateFloater}/>
    <div className={style.padded}>
        <div className={style.actions}>
            <SearchBar handleChange={handleSearch}/>
            <Button name={<AiOutlineControl size={22}/>} onClick={toggleFilterFloater} type="basic"/>
            <Button name='New' onClick={toggleCreateFloater} type="accent"/>
        </div>
        {offerCards()}
    </div>
</div>
    );
}

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
