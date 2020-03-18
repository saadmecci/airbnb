import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-final-form';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import InputCalendarModal from './components/Calendar';

const SearchCard = styled.div`
    background: #FFFFFF;
    height: 420px;
    width: 375px;
    color: #484848;
    border-radius: 4px;
    padding: 32px 32px 24px 32px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.12);
`
const CardTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    font-family: Airbnb Cereal App Medium;
    margin: 0;
    padding: 0;
`
const CardForm = styled.div`
    font-size: 14px;
    font-family: Airbnb Cereal App Medium;
`
const FormInfo = styled.div`
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 16px;
    margin-bottom: 16px;
`
const SearchButton = styled.button`
    background-color: #FF5A5F;
    border: transparent;
    height: 48px;
    width: 100px;
    border-radius: 4px;
    color: #FFFFFF;
    font-size: 16px;
    font-family: Airbnb Cereal App Medium;
    text-align: center;
    margin-top: 5px;
    cursor: pointer;
`
const UserInput = styled.input`
    height: 45px;
    width: 100%;
    font-size: 16px;
    padding-left: 10px;
    font-family: Airbnb Cereal App Light;
    box-sizing: border-box;
    border-radius: 4px;
    border: 0.5px solid #E7E7E7;
`

const SearchBox = () => {

    const [checkInModal, setCheckInModal] = useState("none");
    const [checkOutModal, setCheckOutModal] = useState("none");
    const node = useRef();

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            return;
        }
        setCheckInModal("none");
        setCheckOutModal("none");
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };

    }, []);

    const onSubmit = (e) => {
        console.log("haha")
    }
    
    return (
        <SearchCard>
            <CardTitle>
                Book unique places to <br/>stay and things to do.
            </CardTitle>
            <CardForm>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <FormInfo>
                                <div style={{marginBottom:"8px"}}>
                                    <label>WHERE</label>
                                </div>
                                <div>
                                    <UserInput
                                        name="location"
                                        component="input"
                                        type="text"
                                        placeholder="Anywhere"
                                    />
                                </div>
                            </FormInfo>
                            <FormInfo style={{marginTop:"25px", display:"flex"}}>
                                <div style={{width:"50%"}}>
                                    <label>CHECK-IN</label>
                                    <UserInput
                                        style={{marginTop:"8px"}}
                                        name="checkin"
                                        component="input"
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                        onClick={() => setCheckInModal("block")}
                                    />
                                    <InputCalendarModal ref={node} display={checkInModal}>
                                        <Calendar/>
                                    </InputCalendarModal>
                                </div>
                                <div style={{width:"50%"}}>
                                    <label>CHECKOUT</label>
                                    <UserInput
                                        style={{marginTop:"8px"}}
                                        name="checkout"
                                        component="input"
                                        type="text"
                                        placeholder="mm/dd/yyyy"
                                        onClick={() => setCheckOutModal("block")}
                                    />
                                    <InputCalendarModal ref={node} display={checkOutModal}>
                                        <Calendar/>
                                    </InputCalendarModal>
                                </div>
                            </FormInfo>
                            <FormInfo>
                                <div style={{marginTop:"25px", marginBottom:"8px"}}>
                                    <label>GUESTS</label>
                                </div>
                                <div>
                                    <UserInput
                                        name="guests"
                                        component="select"
                                        placeholder="Guests"
                                    />
                                </div>
                            </FormInfo>
                            <FormInfo>
                                <div style={{textAlign:"right"}}>
                                    <SearchButton>Search</SearchButton>
                                </div>
                            </FormInfo>
                        </form>
                    )}
                />
            </CardForm>
        </SearchCard>
    )
}

export default SearchBox;