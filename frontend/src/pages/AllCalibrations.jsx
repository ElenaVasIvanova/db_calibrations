import React, { useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { format } from 'date-fns'
import { ColumnFilter } from '../components/ColumnFilter'
import Table from '../components/Table'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {columns_meas_mhl} from '../components/columns_meas/columns_meas_mhl'
import {columns_meas_mhl_2} from '../components/columns_meas/columns_meas_mhl_2'
import {columns_meas_lng} from '../components/columns_meas/columns_meas_lng'
import {columns_meas_lng_2} from '../components/columns_meas/columns_meas_lng_2'
import {columns_meas_Ll_philips} from '../components/columns_meas/columns_meas_Ll_philips'
import {columns_meas_Ll_philips_2} from '../components/columns_meas/columns_meas_Ll_philips_2'
import {columns_meas_A60} from '../components/columns_meas/columns_meas_A60'
import {columns_meas_A60_2} from '../components/columns_meas/columns_meas_A60_2'
import {columns_meas_Ultra} from '../components/columns_meas/columns_meas_Ultra'
import {columns_meas_Ultra_2} from '../components/columns_meas/columns_meas_Ultra_2'
import {columns_meas_Star} from '../components/columns_meas/columns_meas_Star'
import {columns_meas_Star_2} from '../components/columns_meas/columns_meas_Star_2'
import {columns_meas_VT_1864} from '../components/columns_meas/columns_meas_VT_1864'
import {columns_meas_VT_1864_2} from '../components/columns_meas/columns_meas_VT_1864_2'
import {columns_meas_Viva_cool} from '../components/columns_meas/columns_meas_Viva_cool'
import {columns_meas_Viva_cool_2} from '../components/columns_meas/columns_meas_Viva_cool_2'
import {columns_meas_Viva_warm} from '../components/columns_meas/columns_meas_Viva_warm'
import {columns_meas_Viva_warm_2} from '../components/columns_meas/columns_meas_Viva_warm_2'
import {columns_meas_OSRAM_6500} from '../components/columns_meas/columns_meas_OSRAM_6500'
import {columns_meas_OSRAM_6500_2} from '../components/columns_meas/columns_meas_OSRAM_6500_2'
import {columns_meas_Ll_6500} from '../components/columns_meas/columns_meas_Ll_6500'
import {columns_meas_Ll_6500_2} from '../components/columns_meas/columns_meas_Ll_6500_2'
import {columns_meas_lng_1} from '../components/columns_meas/columns_meas_lng_1'
import {columns_meas_lng_1_2} from '../components/columns_meas/columns_meas_lng_1_2'
import {columns_CS_sources} from '../components/columns_CS_sources'

import {columns_deviation_meas_mhl} from '../components/columns_deviation_meas/columns_deviation_meas_mhl'
import {columns_deviation_meas_lng} from '../components/columns_deviation_meas/columns_deviation_meas_lng'
import {columns_deviation_meas_Ll_philips} from '../components/columns_deviation_meas/columns_deviation_meas_Ll_philips'
import {columns_deviation_meas_A60} from '../components/columns_deviation_meas/columns_deviation_meas_A60'
import {columns_deviation_meas_Ultra} from '../components/columns_deviation_meas/columns_deviation_meas_Ultra'
import {columns_deviation_meas_Star} from '../components/columns_deviation_meas/columns_deviation_meas_Star'
import {columns_deviation_meas_VT_1864} from '../components/columns_deviation_meas/columns_deviation_meas_VT_1864'
import {columns_deviation_meas_Viva_cool} from '../components/columns_deviation_meas/columns_deviation_meas_Viva_cool'
import {columns_deviation_meas_Viva_warm} from '../components/columns_deviation_meas/columns_deviation_meas_Viva_warm'
import {columns_deviation_meas_OSRAM_6500} from '../components/columns_deviation_meas/columns_deviation_meas_OSRAM_6500'
import {columns_deviation_meas_Ll_6500} from '../components/columns_deviation_meas/columns_deviation_meas_Ll_6500'
import {columns_deviation_meas_lng_1} from '../components/columns_deviation_meas/columns_deviation_meas_lng_1'
const REACT_APP_SERVER_URL = 'https://db-calibrations-loft-api.onrender.com'
const api_url_allcall = REACT_APP_SERVER_URL + '/api/allcalibrations'

function AllCalibrations() {

  const [show_mhl, setshow_mhl] = useState("");
  const [show_lng, setshow_lng] = useState("");
  const [show_Ll_philips, setshow_Ll_philips] = useState("");
  const [show_A60, setshow_A60] = useState("");
  const [show_Ultra, setshow_Ultra] = useState("");
  const [show_Star, setshow_Star] = useState("");
  const [show_VT_1864, setshow_VT_1864] = useState("");
  const [show_Viva_cool, setshow_Viva_cool] = useState("");
  const [show_Viva_warm, setshow_Viva_warm] = useState("");
  const [show_OSRAM_6500, setshow_OSRAM_6500] = useState("");
  const [show_Ll_6500, setshow_Ll_6500] = useState("");
  const [show_lng_1, setshow_lng_1] = useState("");
  const [show_CS_sources, setshow_CS_sources] = useState("");

  const [deviation_show_mhl, setdeviation_show_mhl] = useState("");
  const [deviation_show_lng, setdeviation_show_lng] = useState("");
  const [deviation_show_Ll_philips, setdeviation_show_Ll_philips] = useState("");
  const [deviation_show_A60, setdeviation_show_A60] = useState("");
  const [deviation_show_Ultra, setdeviation_show_Ultra] = useState("");
  const [deviation_show_Star, setdeviation_show_Star] = useState("");
  const [deviation_show_VT_1864, setdeviation_show_VT_1864] = useState("");
  const [deviation_show_Viva_cool, setdeviation_show_Viva_cool] = useState("");
  const [deviation_show_Viva_warm, setdeviation_show_Viva_warm] = useState("");
  const [deviation_show_OSRAM_6500, setdeviation_show_OSRAM_6500] = useState("");
  const [deviation_show_Ll_6500, setdeviation_show_Ll_6500] = useState("");
  const [deviation_show_lng_1, setdeviation_show_lng_1] = useState("");
  

  const onShow_mhl = () => {
    setshow_mhl(!show_mhl) 
  };

  const onShow_lng = () => {
    setshow_lng(!show_lng) 
  };

  const onShow_Ll_philips = () => {
    setshow_Ll_philips(!show_Ll_philips) 
  };

  const onShow_A60 = () => {
    setshow_A60(!show_A60) 
  };

  const onShow_Ultra = () => {
    setshow_Ultra(!show_Ultra) 
  };

  const onShow_Star = () => {
    setshow_Star(!show_Star) 
  };

  const onShow_VT_1864 = () => {
    setshow_VT_1864(!show_VT_1864) 
  };

  const onShow_Viva_cool = () => {
    setshow_Viva_cool(!show_Viva_cool) 
  };

  const onShow_Viva_warm = () => {
    setshow_Viva_warm(!show_Viva_warm) 
  };

  const onShow_OSRAM_6500 = () => {
    setshow_OSRAM_6500(!show_OSRAM_6500) 
  };

  const onShow_Ll_6500 = () => {
    setshow_Ll_6500(!show_Ll_6500) 
  };

  const onShow_lng_1 = () => {
    setshow_lng_1(!show_lng_1) 
  };

  const onShow_CS_sources = () => {
    setshow_CS_sources(!show_CS_sources) 
  };


  const onDeviation_Show_mhl = () => {
    setdeviation_show_mhl(!deviation_show_mhl) 
  };

  const onDeviation_Show_lng = () => {
    setdeviation_show_lng(!deviation_show_lng) 
  };

  const onDeviation_Show_Ll_philips = () => {
    setdeviation_show_Ll_philips(!deviation_show_Ll_philips) 
  };

  const onDeviation_Show_A60 = () => {
    setdeviation_show_A60(!deviation_show_A60) 
  };

  const onDeviation_Show_Ultra = () => {
    setdeviation_show_Ultra(!deviation_show_Ultra) 
  };

  const onDeviation_Show_Star = () => {
    setdeviation_show_Star(!deviation_show_Star) 
  };

  const onDeviation_Show_VT_1864 = () => {
    setdeviation_show_VT_1864(!deviation_show_VT_1864) 
  };

  const onDeviation_Show_Viva_cool = () => {
    setdeviation_show_Viva_cool(!deviation_show_Viva_cool) 
  };

  const onDeviation_Show_Viva_warm = () => {
    setdeviation_show_Viva_warm(!deviation_show_Viva_warm) 
  };

  const onDeviation_Show_OSRAM_6500 = () => {
    setdeviation_show_OSRAM_6500(!deviation_show_OSRAM_6500) 
  };

  const onDeviation_Show_Ll_6500 = () => {
    setdeviation_show_Ll_6500(!deviation_show_Ll_6500) 
  };

  const onDeviation_Show_lng_1 = () => {
    setdeviation_show_lng_1(!deviation_show_lng_1) 
  };

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async (client) =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(api_url_allcall);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  {data.map(calibration => (<span key={calibration._id}>{calibration.client}</span>))}



  return (
    <>
    <div>
    <BackButton url="/" />
    <h1>Измервания по вид лампа и номер</h1>
    <p><h4>р - Референтна стойност на осветеността;
    и - Измерена стойност на осветеността;
    н - Разширена неопределеност;</h4></p>

    <hr />
    <br />
    <Tabs>
    <TabList>
    <Tab>Металхалогенна лампа</Tab>
    <Tab>Лампа с нажежаема жичка</Tab>
    <Tab>philips - Луминисцентна лампа/6500K</Tab>
    <Tab>Parathom classic A60/2700K warm white</Tab>
    <Tab>Ultralux/2700K warm white</Tab>
    <Tab>Star classic А25/3000K</Tab>
    <Tab>VT-1864/4500K</Tab>
    <Tab>VIVALUX/Viva/6400K cool white</Tab>
    <Tab>VIVALUX/Viva/6400K warm white</Tab>
    <Tab>OSRAM-Германия/6500K daylight</Tab>
    <Tab>Luminescent lamp/6500K</Tab>
    <Tab>Лампа с нажежаема жичка - l lux/2800K</Tab>
    </TabList>
    <TabPanel>

    <div
    onClick={onShow_mhl}
    className="btn btn-block btn-danger"
    >
    Данни Металхалогенна лампа
    </div>
    <div>

    {show_mhl && 
      <Table data={data} columns={columns_meas_mhl}  />}
      <br />

      {show_mhl && 
        <Table data={data} columns={columns_meas_mhl_2}  />}

        </div> 
        <hr />
        <br />
        </TabPanel>
        <TabPanel>
        <div
        onClick={onShow_lng}
        className="btn btn-block btn-danger"
        >
        Данни Лампа с нажежаема жичка
        </div>
        <div>

        {show_lng && 
          <Table data={data} columns={columns_meas_lng}  />}
          <br />

          {show_lng && 
            <Table data={data} columns={columns_meas_lng_2}  />}
            </div>
            <hr />
            <br />
            </TabPanel>
            <TabPanel>
            <div
            onClick={onShow_Ll_philips}
            className="btn btn-block btn-danger"
            >
            Данни Луминисцентна лампа/6500K - philips
            </div>
            <div>

            {show_Ll_philips && 
              <Table data={data} columns={columns_meas_Ll_philips}  />}
              <br />

              {show_Ll_philips && 
                <Table data={data} columns={columns_meas_Ll_philips_2}  />}
                </div>
                <hr />
                <br />
                </TabPanel>
                <TabPanel>

                <div
                onClick={onShow_A60}
                className="btn btn-block btn-danger"
                >
                Данни лампа Parathom classic A60/2700K warm white
                </div>
                <div>


                {show_A60 && 
                  <Table data={data} columns={columns_meas_A60}  />}
                  <br />

                  {show_A60 && 
                    <Table data={data} columns={columns_meas_A60_2}  />}



                    </div>
                    <hr />
                    <br />
                    </TabPanel>
                    <TabPanel>
                    <div
                    onClick={onShow_Ultra}
                    className="btn btn-block btn-danger"
                    >
                    Данни лампа Ultralux/2700K warm white
                    </div>
                    <div>

                    {show_Ultra && 
                      <Table data={data} columns={columns_meas_Ultra}  />}
                      <br />

                      {show_Ultra && 
                        <Table data={data} columns={columns_meas_Ultra_2}  />}
                        </div>
                        <hr />
                        <br />
                        </TabPanel>
                        <TabPanel>
                        <div
                        onClick={onShow_Star}
                        className="btn btn-block btn-danger"
                        >
                        Данни лампа Star classic А25/3000K
                        </div>
                        <div>

                        {show_Star && 
                          <Table data={data} columns={columns_meas_Star}  />}
                          <br />

                          {show_Star && 
                            <Table data={data} columns={columns_meas_Star_2}  />}
                            </div>
                            <hr />
                            <br />
                            </TabPanel>
                            <TabPanel>
                            <div
                            onClick={onShow_VT_1864}
                            className="btn btn-block btn-danger"
                            >
                            Данни лампа VT-1864/4500K
                            </div>
                            <div>

                            {show_VT_1864 && 
                              <Table data={data} columns={columns_meas_VT_1864}  />}
                              <br />

                              {show_VT_1864 && 
                                <Table data={data} columns={columns_meas_VT_1864_2}  />}
                                </div>
                                <hr />
                                <br />
                                </TabPanel>
                                <TabPanel>
                                <div
                                onClick={onShow_Viva_cool}
                                className="btn btn-block btn-danger"
                                >
                                Данни лампа VIVALUX/Viva/6400K cool white
                                </div>
                                <div>

                                {show_Viva_cool && 
                                  <Table data={data} columns={columns_meas_Viva_cool}  />}
                                  <br />

                                  {show_Viva_cool && 
                                    <Table data={data} columns={columns_meas_Viva_cool_2}  />}
                                    </div>
                                    <hr />
                                    <br />
                                    </TabPanel>
                                    <TabPanel>
                                    <div
                                    onClick={onShow_Viva_warm}
                                    className="btn btn-block btn-danger"
                                    >
                                    Данни лампа VIVALUX/Viva/6400K warm white
                                    </div>
                                    <div>

                                    {show_Viva_warm && 
                                      <Table data={data} columns={columns_meas_Viva_warm}  />}
                                      <br />

                                      {show_Viva_warm && 
                                        <Table data={data} columns={columns_meas_Viva_warm_2}  />}
                                        </div>
                                        <hr />
                                        <br />
                                        </TabPanel>
                                        <TabPanel>
                                        <div
                                        onClick={onShow_OSRAM_6500}
                                        className="btn btn-block btn-danger"
                                        >
                                        Данни лампа OSRAM-Германия/6500K daylight
                                        </div>
                                        <div>

                                        {show_OSRAM_6500 && 
                                          <Table data={data} columns={columns_meas_OSRAM_6500}  />}
                                          <br />

                                          {show_OSRAM_6500 && 
                                            <Table data={data} columns={columns_meas_OSRAM_6500_2}  />}
                                            </div>
                                            <hr />
                                            <br />
                                            </TabPanel>
                                            <TabPanel>
                                            <div
                                            onClick={onShow_Ll_6500}
                                            className="btn btn-block btn-danger"
                                            >
                                            Данни лампа Luminescent lamp/6500K
                                            </div>
                                            <div>

                                            {show_Ll_6500 && 
                                              <Table data={data} columns={columns_meas_Ll_6500}  />}
                                              <br />

                                              {show_Ll_6500 && 
                                                <Table data={data} columns={columns_meas_Ll_6500_2}  />}
                                                </div>
                                                <hr />
                                                <br />
                                                </TabPanel>
                                                <TabPanel>
                                                <div
                                                onClick={onShow_lng_1}
                                                className="btn btn-block btn-danger"
                                                >
                                                Данни Лампа с нажежаема жичка - l lux/2800K
                                                </div>
                                                <div>

                                                {show_lng_1 && 
                                                  <Table data={data} columns={columns_meas_lng_1}  />}
                                                  <br />

                                                  {show_lng_1 && 
                                                    <Table data={data} columns={columns_meas_lng_1_2}  />}
                                                    </div>
                                                    <hr />
                                                    <br />

                                                    </TabPanel>
                                                    </Tabs>


                                                    </div>


                                                    <hr />
                                                    <br />
                                                    <div
                                                    onClick={onShow_CS_sources}
                                                    className="btn btn-block btn-danger"
                                                    >
                                                    Данни по CК и видове източници      
                                                    </div>
                                                    {show_CS_sources &&   

                                                      <Table
                                                      columns={columns_CS_sources}
                                                      data={data}

                                                      />}


                                                      <br />
                                                      <hr />


                                                      <br />
                                                      <hr />
                                                      <br />
                                                      <br />

                                                      <br />


                                                      <div>

                                                      <h1> Данни за отклонението на уредите</h1>
                                                      <p><h4>р - Референтна стойност на осветеността;
                                                      % - Процент отклонение на уреда в точката;</h4></p>
                                                      <hr />


                                                      <br />
                                                      <Tabs>
                                                      <TabList>
                                                      <Tab>Металхалогенна лампа</Tab>
                                                      <Tab>Лампа с нажежаема жичка</Tab>
                                                      <Tab>philips - Луминисцентна лампа/6500K</Tab>
                                                      <Tab>Parathom classic A60/2700K warm white</Tab>
                                                      <Tab>Ultralux/2700K warm white</Tab>
                                                      <Tab>Star classic А25/3000K</Tab>
                                                      <Tab>VT-1864/4500K</Tab>
                                                      <Tab>VIVALUX/Viva/6400K cool white</Tab>
                                                      <Tab>VIVALUX/Viva/6400K warm white</Tab>
                                                      <Tab>OSRAM-Германия/6500K daylight</Tab>
                                                      <Tab>Luminescent lamp/6500K</Tab>
                                                      <Tab>Лампа с нажежаема жичка - l lux/2800K</Tab>
                                                      </TabList>
                                                      <TabPanel>

                                                      <div
                                                      onClick={onDeviation_Show_mhl}
                                                      className="btn btn-block btn-danger"
                                                      >
                                                      Данни Металхалогенна лампа
                                                      </div>
                                                      <div>

                                                      {deviation_show_mhl && 
                                                        <Table data={data} columns={columns_deviation_meas_mhl}  />}


                                                        </div> 
                                                        <hr />
                                                        <br />
                                                        </TabPanel>
                                                        <TabPanel>
                                                        <div
                                                        onClick={onDeviation_Show_lng}
                                                        className="btn btn-block btn-danger"
                                                        >
                                                        Данни Лампа с нажежаема жичка
                                                        </div>
                                                        <div>

                                                        {deviation_show_lng && 
                                                          <Table data={data} columns={columns_deviation_meas_lng}  />}
                                                          </div>
                                                          <hr />
                                                          <br />
                                                          </TabPanel>
                                                          <TabPanel>
                                                          <div
                                                          onClick={onDeviation_Show_Ll_philips}
                                                          className="btn btn-block btn-danger"
                                                          >
                                                          Данни Луминисцентна лампа/6500K - philips
                                                          </div>
                                                          <div>

                                                          {deviation_show_Ll_philips && 
                                                            <Table data={data} columns={columns_deviation_meas_Ll_philips}  />}

                                                            </div>
                                                            <hr />
                                                            <br />
                                                            </TabPanel>
                                                            <TabPanel>

                                                            <div
                                                            onClick={onDeviation_Show_A60}
                                                            className="btn btn-block btn-danger"
                                                            >
                                                            Данни лампа Parathom classic A60/2700K warm white
                                                            </div>
                                                            <div>
                                                            {deviation_show_A60 && 
                                                              <Table data={data} columns={columns_deviation_meas_A60}  />}
                                                              <br />
                                                              </div>

                                                              <hr />
                                                              <br />
                                                              </TabPanel>
                                                              <TabPanel>
                                                              <div
                                                              onClick={onDeviation_Show_Ultra}
                                                              className="btn btn-block btn-danger"
                                                              >
                                                              Данни лампа Ultralux/2700K warm white
                                                              </div>
                                                              <div>

                                                              {deviation_show_Ultra && 
                                                                <Table data={data} columns={columns_deviation_meas_Ultra}  />}
                                                                </div>
                                                                <hr />
                                                                <br />
                                                                </TabPanel>
                                                                <TabPanel>
                                                                <div
                                                                onClick={onDeviation_Show_Star}
                                                                className="btn btn-block btn-danger"
                                                                >
                                                                Данни лампа Star classic А25/3000K
                                                                </div>
                                                                <div>

                                                                {deviation_show_Star && 
                                                                  <Table data={data} columns={columns_deviation_meas_Star}  />}
                                                                  <br />

                                                                  </div>
                                                                  <hr />
                                                                  <br />
                                                                  </TabPanel>
                                                                  <TabPanel>
                                                                  <div
                                                                  onClick={onDeviation_Show_VT_1864}
                                                                  className="btn btn-block btn-danger"
                                                                  >
                                                                  Данни лампа VT-1864/4500K
                                                                  </div>
                                                                  <div>

                                                                  {deviation_show_VT_1864 && 
                                                                    <Table data={data} columns={columns_deviation_meas_VT_1864}  />}
                                                                    </div>
                                                                    <hr />
                                                                    <br />
                                                                    </TabPanel>
                                                                    <TabPanel>
                                                                    <div
                                                                    onClick={onDeviation_Show_Viva_cool}
                                                                    className="btn btn-block btn-danger"
                                                                    >
                                                                    Данни лампа VIVALUX/Viva/6400K cool white
                                                                    </div>
                                                                    <div>

                                                                    {deviation_show_Viva_cool && 
                                                                      <Table data={data} columns={columns_deviation_meas_Viva_cool}  />}
                                                                      </div>
                                                                      <hr />
                                                                      <br />
                                                                      </TabPanel>
                                                                      <TabPanel>
                                                                      <div
                                                                      onClick={onDeviation_Show_Viva_warm}
                                                                      className="btn btn-block btn-danger"
                                                                      >
                                                                      Данни лампа VIVALUX/Viva/6400K warm white
                                                                      </div>
                                                                      <div>

                                                                      {deviation_show_Viva_warm && 
                                                                        <Table data={data} columns={columns_deviation_meas_Viva_warm}  />}

                                                                        </div>
                                                                        <hr />
                                                                        <br />
                                                                        </TabPanel>
                                                                        <TabPanel>
                                                                        <div
                                                                        onClick={onDeviation_Show_OSRAM_6500}
                                                                        className="btn btn-block btn-danger"
                                                                        >
                                                                        Данни лампа OSRAM-Германия/6500K daylight
                                                                        </div>
                                                                        <div>

                                                                        {deviation_show_OSRAM_6500 && 
                                                                          <Table data={data} columns={columns_deviation_meas_OSRAM_6500}  />}
                                                                          </div>
                                                                          <hr />
                                                                          <br />
                                                                          </TabPanel>
                                                                          <TabPanel>
                                                                          <div
                                                                          onClick={onDeviation_Show_Ll_6500}
                                                                          className="btn btn-block btn-danger"
                                                                          >
                                                                          Данни лампа Luminescent lamp/6500K
                                                                          </div>
                                                                          <div>

                                                                          {deviation_show_Ll_6500 && 
                                                                            <Table data={data} columns={columns_deviation_meas_Ll_6500}  />}
                                                                            </div>
                                                                            <hr />
                                                                            <br />
                                                                            </TabPanel>
                                                                            <TabPanel>
                                                                            <div
                                                                            onClick={onDeviation_Show_lng_1}
                                                                            className="btn btn-block btn-danger"
                                                                            >
                                                                            Данни Лампа с нажежаема жичка - l lux/2800K
                                                                            </div>
                                                                            <div>

                                                                            {deviation_show_lng_1 && 
                                                                              <Table data={data} columns={columns_deviation_meas_lng_1}  />}

                                                                              </div>
                                                                              <hr />
                                                                              <br />

                                                                              </TabPanel>
                                                                              </Tabs>


                                                                              </div>


                                                                              <hr />
                                                                              <br />

                                                                              </>
                                                                              )
}
export default AllCalibrations
