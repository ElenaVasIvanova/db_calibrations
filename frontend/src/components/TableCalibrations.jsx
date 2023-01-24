import React, { useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { format } from 'date-fns'
import { ColumnFilter } from './ColumnFilter'
import Table from './Table'
function TableCalibrations() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async (client) =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`/api/allcalibrations`);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  {data.map(calibration => (<span key={calibration._id}>{calibration.client}</span>))}

const columns_cal = [
{
  Header:     'Клиент:',
  Footer:     'Клиент:',
  accessor:   'client',
},
{
  Header:     'Средство за измерване/Производител:',
  Footer:    'Средство за измерване/Производител:',
  accessor: properties => properties.device + ' ' + properties.manufacturer
},
{
  Header:    'Тип/Модел и Идентификационен №',
  Footer:    'Тип/Модел и Идентификационен №',
  accessor: properties => properties.type_model + ' ' + properties.identification
},
{
  Header:    '№ на СК/дата',
  Footer:   '№ на СК/дата',
  accessor: properties => properties.num_calibration_certificate + ' ' + properties.data_calibration_certificate
},
]
 const columns_meas1 = [
 {
  Header: 'Стойност на тока mA:',
  Footer: 'Стойност на тока mA:',
  accessor: 'electricity',
  disableFilters: false,
},
{
  Header: 'Стойност на напрежението V:',
  Footer: 'Стойност на напрежението V:',
  accessor: 'voltage',
  disableFilters: true,
},
{
  Header: 'Първа точка на калибриране:',
  Footer: 'Първа точка на калибриране:',
  accessor: 'one_measurement_results',
},
]
return (
  <>
  <div>
  <Table data={data} columns={columns_cal}  />
  </div>
  <div>
  <Table data={data} columns={columns_meas1}  />
  </div>
  </>
  )
}
export default TableCalibrations
