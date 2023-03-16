import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import HeadingModule from '../components/Layout/HeadingComponent/Heading';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Chart from "react-apexcharts";
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { Link } from 'react-router-dom';
import Web3 from 'web3'

// import { mapStateToProps } from './mappers';

const DashboardModule = (props) => {
    // date picker
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    useEffect(() =>{
        
    },[])

    // chart
  
    return (
        <>
            <section className="zl_dashboard_page">
                <HeadingModule name={'Dashboard'} />
                <div className="zl_all_page_comman_content">
                    <div className="zl_chart_box_heading_date">
                        <h2 className="zl_chart_box_heading">Revenue</h2>
                        <div className="zl_dashboard_datepicker position-relative">
                            <DatePicker
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                isClearable={true}
                                dateFormat="MMM, yyyy"
                            />
                        </div>
                    </div>
                    {/* <div className="zl_dashboard_chart">
                        <Chart options={options} series={options.series} type="area" height={350} />
                    </div> */}
                    <div className="zl_all_page_comman_total_price">
                        <p className="zl_all_page_total_price_heading">Total Revenue</p>
                        <h2 className="zl_all_page_total_price_text">$76685.41</h2>
                        <span className="zl_all_page_total_price_up_text">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6.66668V1.33334" stroke="#50E2C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 3.33334L4 1.33334L6 3.33334" stroke="#50E2C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            7,00%
                        </span>
                    </div>
                </div>
                <div className="zl_add_currency_content">
                    <h3 className="zl_bottom_content_heading">Wallets</h3>
                    <div className="zl_add_currency_row row">
                        
                        <div className="zl_add_currency_column col">
                            <div className="zl_add_currency_inner_content">
                                <div className="zl_add_currency_icon_chart">
                                    <div className="zl_currency_icon">
                                        <svg viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.48909 9.60596L0 13.2332L8.48909 17.9453L16.9748 13.2332L8.48909 9.60596Z" fill="#010101" fillOpacity="0.6" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 13.2332L8.48909 17.9452V0L0 13.2332Z" fill="#96A0C2" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.48926 0V17.9452L16.975 13.2332L8.48926 0Z" fill="#7680A0" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 14.7444L8.48909 25.9805V19.4564L0 14.7444Z" fill="#96A0C2" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.48926 19.4564V25.9805L16.9817 14.7444L8.48926 19.4564Z" fill="#7680A0" />
                                        </svg>
                                    </div>
                                    <Sparklines data={[14, 12, 15, 0, 5, 0]} margin={6} className="zl_add_currency_mini_chart">
                                        <SparklinesLine style={{ strokeWidth: 10, stroke: "#A330FF", fill: "none", curve: "smooth" }} />
                                        <SparklinesSpots size={4}
                                            style={{ stroke: "#A330FF", strokeWidth: 3, fill: "white" }} />
                                    </Sparklines>
                                </div>
                                <div className="zl_add_currency_price">
                                    <div className="zl_add_currency_left_price">
                                        <h3>ETH</h3>
                                        <p>3.2134</p>
                                    </div>
                                    <div className="zl_add_currency_right_price">
                                        <span className="zl_add_currency_down_price">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.60609 2.39391L2.69695 1.48477C2.36222 1.15004 1.81951 1.15004 1.48477 1.48477C1.15004 1.81951 1.15004 2.36222 1.48477 2.69695L2.39391 3.60609L0 6H6V0L3.60609 2.39391Z" fill="#E3507A" />
                                            </svg>
                                            -5.23%
                                        </span>
                                        <p>$3,452.1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="zl_add_currency_column col">
                            <Link to={'/addcurrency'} className="zl_add_currency_btn_content">
                                + Connect Wallet
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default connect(null, null)(DashboardModule);
