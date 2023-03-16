import React from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl } from 'react-bootstrap'
import HeadingModule from '../components/Layout/HeadingComponent/Heading';

const RestoreWalletModule = () => {
    const addCurrency = [
        {
            id: 1,
            image: 'assets/image/kenya2.png',
            heading: 'KSHS',
            peregraph: 'Kenyan Shillings',
            activeCurrency: 'active'
        },
        {
            id: 2,
            image: 'assets/image/Brazil.png',
            heading: 'BRL',
            peregraph: 'Brazilian Real',
            activeCurrency: 'unactive'
        },
        {
            id: 3,
            image: 'assets/image/Canada.png',
            heading: 'CAD',
            peregraph: 'Canadian Dollar',
            activeCurrency: 'unactive'
        }
    ];
    return (
        <>
            <section className="zl_currency_page">
                <HeadingModule name={'Currency'} />
                <div className="zl_all_page_comman_content">
                    <InputGroup className="zl_add_currency_search">
                        <InputGroup.Text className="zl_add_currency_search_icon">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.0972" cy="10.0968" r="8.58064" stroke="#828CAE" strokeWidth="2" />
                                <path d="M15.9678 16.8709L20.2968 21.2" stroke="#828CAE" strokeWidth="2" />
                            </svg>
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Search"
                            type="text"
                        />
                    </InputGroup>
                    <div className="zl_add_currency_row row">
                        {addCurrency.map((currencyValue, i) => (
                            <div className={`zl_add_currency_column col ${currencyValue.activeCurrency}`} key={i}>
                                <div className="zl_add_currency_inner_content">
                                    <div className="zl_add_currency_img">
                                        <img src={currencyValue.image} alt="currency-img" />
                                    </div>
                                    <div className="zl_add_currency_text">
                                        <h3>{currencyValue.heading}</h3>
                                        <p>{currencyValue.peregraph}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default connect(null, null)(RestoreWalletModule);
