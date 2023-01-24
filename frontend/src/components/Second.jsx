import React, { useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Second({
  onChange,
  lng_deviation_one, 
  lng_deviation_two, 
  lng_deviation_three,
  lng_deviation_four,
  lng_deviation_five,
  lng_deviation_six, 
  lng_deviation_seven,
  lng_deviation_eight,
  lng_deviation_nine,
  lng_deviation_ten,
  lamp_types_two,      
  lamp_stabilityes_two,      
  electricity_two,     
  voltage_two,     
  sec_measurement_results_one_lng,      
  sec_extended_uncertaintyes_one_lng,     
  sec_Illum_references_one_lng,     
  sec_measurement_results_two_lng,      
  sec_extended_uncertaintyes_two_lng,      
  sec_Illum_references_two_lng,      
  sec_measurement_results_three_lng,     
  sec_extended_uncertaintyes_three_lng,     
  sec_Illum_references_three_lng,      
  sec_measurement_results_four_lng,      
  sec_extended_uncertaintyes_four_lng,      
  sec_Illum_references_four_lng,     
  sec_measurement_results_five_lng,      
  sec_extended_uncertaintyes_five_lng,      
  sec_Illum_references_five_lng,     
  sec_measurement_results_six_lng,      
  sec_extended_uncertaintyes_six_lng,     
  sec_Illum_references_six_lng,     
  sec_measurement_results_seven_lng,     
  sec_extended_uncertaintyes_seven_lng,      
  sec_Illum_references_seven_lng,      
  sec_measurement_results_eight_lng,      
  sec_extended_uncertaintyes_eight_lng,     
  sec_Illum_references_eight_lng,     
  sec_measurement_results_nine_lng,     
  sec_extended_uncertaintyes_nine_lng,      
  sec_Illum_references_nine_lng,      
  sec_measurement_results_ten_lng,
  sec_extended_uncertaintyes_ten_lng,      
  sec_Illum_references_ten_lng, 
}) {
const [Lng_deviation_one, setLng_Deviation_one] = useState(null);
const [Lng_deviation_two, setLng_Deviation_two] = useState(null);
const [Lng_deviation_three, setLng_Deviation_three] = useState(null);
const [Lng_deviation_four, setLng_Deviation_four] = useState(null);
const [Lng_deviation_five, setLng_Deviation_five] = useState(null);
const [Lng_deviation_six, setLng_Deviation_six] = useState(null);
const [Lng_deviation_seven, setLng_Deviation_seven] = useState(null);
const [Lng_deviation_eight, setLng_Deviation_eight] = useState(null);
const [Lng_deviation_nine, setLng_Deviation_nine] = useState(null);
const [Lng_deviation_ten, setLng_Deviation_ten] = useState(null);

  const one_calkDeviation_lng = () => {
  const Lng_deviation_one = (((sec_measurement_results_one_lng-sec_Illum_references_one_lng)/sec_Illum_references_one_lng)*100).toFixed(2)
  setLng_Deviation_one(Lng_deviation_one);
 
  }
const one_clearDeviation_lng = () => {
  setLng_Deviation_one('');
  };
const two_calkDeviation_lng = () => {
  const Lng_deviation_two = (((sec_measurement_results_two_lng-sec_Illum_references_two_lng)/sec_Illum_references_two_lng)*100).toFixed(2)
  setLng_Deviation_two(Lng_deviation_two);
  }
const two_clearDeviation_lng = () => {
  setLng_Deviation_two('');
  };
const three_calkDeviation_lng = () => {
  const Lng_deviation_three = (((sec_measurement_results_three_lng-sec_Illum_references_three_lng)/sec_Illum_references_three_lng)*100).toFixed(2)
  setLng_Deviation_three(Lng_deviation_three);
  }
const three_clearDeviation_lng = () => {
  setLng_Deviation_three('');
  };
const four_calkDeviation_lng = () => {
  const Lng_deviation_four = (((sec_measurement_results_four_lng-sec_Illum_references_four_lng)/sec_Illum_references_four_lng)*100).toFixed(2)
  setLng_Deviation_four(Lng_deviation_four);
  }
const four_clearDeviation_lng = () => {
  setLng_Deviation_four('');
  };
const five_calkDeviation_lng = () => {
  const Lng_deviation_five = (((sec_measurement_results_five_lng-sec_Illum_references_five_lng)/sec_Illum_references_five_lng)*100).toFixed(2)
  setLng_Deviation_five(Lng_deviation_five);
  }
const five_clearDeviation_lng = () => {
  setLng_Deviation_five('');
  };
const six_calkDeviation_lng = () => {
  const Lng_deviation_six = (((sec_measurement_results_six_lng-sec_Illum_references_six_lng)/sec_Illum_references_six_lng)*100).toFixed(2)
  setLng_Deviation_six(Lng_deviation_six);
  }
const six_clearDeviation_lng = () => {
  setLng_Deviation_six('');
  };
const seven_calkDeviation_lng = () => {
  const Lng_deviation_seven = (((sec_measurement_results_seven_lng-sec_Illum_references_seven_lng)/sec_Illum_references_seven_lng)*100).toFixed(2)
  setLng_Deviation_seven(Lng_deviation_seven);
  }
const seven_clearDeviation_lng = () => {
  setLng_Deviation_seven('');
  };
const eight_calkDeviation_lng = () => {
  const Lng_deviation_eight = (((sec_measurement_results_eight_lng-sec_Illum_references_eight_lng)/sec_Illum_references_eight_lng)*100).toFixed(2)
  setLng_Deviation_eight(Lng_deviation_eight);
  }
const eight_clearDeviation_lng = () => {
  setLng_Deviation_eight('');
  };
const nine_calkDeviation_lng = () => {
  const Lng_deviation_nine = (((sec_measurement_results_nine_lng-sec_Illum_references_nine_lng)/sec_Illum_references_nine_lng)*100).toFixed(2)
  setLng_Deviation_nine(Lng_deviation_nine);
  }
const nine_clearDeviation_lng = () => {
  setLng_Deviation_nine('');
  };
const ten_calkDeviation_lng = () => {
  const Lng_deviation_ten = (((sec_measurement_results_ten_lng-sec_Illum_references_ten_lng)/sec_Illum_references_ten_lng)*100).toFixed(2)
  setLng_Deviation_ten(Lng_deviation_ten);
  };
const ten_clearDeviation_lng = () => {
  setLng_Deviation_ten('');
  };
  return (
    <div>
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_two'
      value={lamp_type.name}
      checked={lamp_types_two === lamp_type.name}
      onChange={onChange}
      type="radio"
      />{lamp_type.name}
      </label>
      </div>  
      )}          
    </div>            
    <h4>Стабилност на лампата:</h4>
    <div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_two'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_two ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_two'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_two === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <div className="form">
    <div className="form-group">
    <label htmlFor="electricity_two">Ток - mA:</label>
    <input type='number' step="0.0001" min="0" max="10000"
    className='form-control' onChange={onChange} value={electricity_two} 
    name='electricity_two' id='electricity_two' />
    </div>
    <div className="form-group">
    <label htmlFor="voltage_two">Напрежение - V:</label>
    <input type='number' step="0.0001" min="0" max="10000"
    className='form-control' onChange={onChange} value={voltage_two} 
    name='voltage_two' id='voltage_two' />
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_one_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_one_lng'onChange={onChange} 
    >
   <option value="" hidden="hidden" isselected={sec_Illum_references_one_lng === "" ? "Избери" 
    : sec_Illum_references_one_lng}>
    {sec_Illum_references_one_lng}
    </option> 

    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_one_lng===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="sec_measurement_results_one_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_measurement_results_one_lng } 
    name='sec_measurement_results_one_lng' id='sec_measurement_results_one_lng' />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_one_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_one_lng} 
    name='sec_extended_uncertaintyes_one_lng' id='sec_extended_uncertaintyes_one_lng' />
    </div>

<div className="form-group">
<p onClick={one_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Lng_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_one}
   name='lng_deviation_one' id='lng_deviation_one' />
    <label htmlFor="lng_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_lng} className="btn btn-block">Изчисти</div>
     </div>


    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_two_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_two_lng'onChange={onChange} 
    >
    <option value="" hidden="hidden" isselected={sec_Illum_references_two_lng === "" ? "Избери" 
    : sec_Illum_references_two_lng}> {sec_Illum_references_two_lng}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_two_lng===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="sec_measurement_results_two_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_measurement_results_two_lng} 
    name='sec_measurement_results_two_lng' id='sec_measurement_results_two_lng' />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_two_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_two_lng} 
    name='sec_extended_uncertaintyes_two_lng' id='sec_extended_uncertaintyes_two_lng' />
    </div>
<div className="form-group">
<p onClick={two_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Lng_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_two}
   name='lng_deviation_two' id='lng_deviation_two' />
    <label htmlFor="lng_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation_lng} className="btn btn-block">Изчисти</div>
     </div>
  
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_three_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_three_lng'onChange={onChange} 
    >
    <option value={sec_Illum_references_three_lng === "" ? "Избери" 
    : sec_Illum_references_three_lng} hidden="hidden">
    {sec_Illum_references_three_lng}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_three_lng===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="sec_measurement_results_three_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_measurement_results_three_lng} 
    name='sec_measurement_results_three_lng' id='sec_measurement_results_three_lng' />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_three_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_three_lng} 
    name='sec_extended_uncertaintyes_three_lng' id='sec_extended_uncertaintyes_three_lng' />
    </div>

<div className="form-group">
<p onClick={three_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Lng_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_three}
   name='lng_deviation_three' id='lng_deviation_three' />
    <label htmlFor="lng_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation_lng} className="btn btn-block">Изчисти</div>
     </div>






    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_four_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_four_lng'onChange={onChange} 
    >
    <option value="" isselected={sec_Illum_references_four_lng === "" ? "Избери" 
    : sec_Illum_references_four_lng} hidden="hidden">
    {sec_Illum_references_four_lng}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_four_lng===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="sec_measurement_results_four_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" 
    className='form-control' onChange={onChange}
    value={sec_measurement_results_four_lng} 
    name='sec_measurement_results_four_lng'  />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_four_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000"
    className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_four_lng} 
    name='sec_extended_uncertaintyes_four_lng'  />
    </div>
    <div className="form-group">
<p onClick={four_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Lng_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_four}
   name='lng_deviation_four' id='lng_deviation_four' />
    <label htmlFor="lng_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
<div onClick={four_clearDeviation_lng} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_five_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_five_lng'onChange={onChange} 
    >
    <option value="" isselected={sec_Illum_references_five_lng === "" ? "Избери" 
    : sec_Illum_references_five_lng} hidden="hidden">
    {sec_Illum_references_five_lng}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_five_lng===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="sec_measurement_results_five_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000"
    className='form-control' onChange={onChange}
    value={sec_measurement_results_five_lng} 
    name='sec_measurement_results_five_lng'  />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_five_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_five_lng} 
    name='sec_extended_uncertaintyes_five_lng'  />
    </div>

<div className="form-group">
<p onClick={five_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Lng_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_five}
   name='lng_deviation_five' id='lng_deviation_five' />
    <label htmlFor="lng_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation_lng} className="btn btn-block">Изчисти</div>




    </div>
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_six_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_six_lng'onChange={onChange} 
    >
    <option value="" isselected={sec_Illum_references_six_lng === "" ? "Избери" 
    : sec_Illum_references_six_lng} hidden="hidden">
    {sec_Illum_references_six_lng}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_six_lng===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="sec_measurement_results_six_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_measurement_results_six_lng} 
    name='sec_measurement_results_six_lng'  />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_six_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_six_lng} 
    name='sec_extended_uncertaintyes_six_lng'  />
    </div>

    <div className="form-group">
<p onClick={six_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Lng_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_six}
   name='lng_deviation_six' id='lng_deviation_six' />
    <label htmlFor="lng_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation_lng} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_seven_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_seven_lng'onChange={onChange} 
    >
    <option value="" isselected={sec_Illum_references_seven_lng === "" ? "Избери" 
    : sec_Illum_references_seven_lng} hidden="hidden">
    {sec_Illum_references_seven_lng}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_seven_lng===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="sec_measurement_results_seven_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_measurement_results_seven_lng} 
    name='sec_measurement_results_seven_lng'  />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_seven_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_seven_lng} 
    name='sec_extended_uncertaintyes_seven_lng'  />
    </div>

    <div className="form-group">
<p onClick={seven_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Lng_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_seven}
   name='lng_deviation_seven' id='lng_deviation_seven' />
    <label htmlFor="lng_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation_lng} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_eight_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_eight_lng'onChange={onChange} 
    >
    <option value="" isselected={sec_Illum_references_eight_lng === "" ? "Избери" 
    : sec_Illum_references_eight_lng} hidden="hidden">
    {sec_Illum_references_eight_lng}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_eight_lng===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="sec_measurement_results_eight_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_measurement_results_eight_lng} 
    name='sec_measurement_results_eight_lng'  />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_eight_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_eight_lng} 
    name='sec_extended_uncertaintyes_eight_lng'  />
    </div>

<div className="form-group">
<p onClick={eight_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Lng_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_eight}
   name='lng_deviation_eight' id='lng_deviation_eight' />
    <label htmlFor="lng_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation_lng} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_nine_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_nine_lng'onChange={onChange} 
    >
    <option value="" isselected={sec_Illum_references_nine_lng === "" ? "Избери" 
    : sec_Illum_references_nine_lng} hidden="hidden">
    {sec_Illum_references_nine_lng}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_nine_lng===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
 <div className="form-group">
    <label htmlFor="sec_measurement_results_nine_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_measurement_results_nine_lng} 
    name='sec_measurement_results_nine_lng'  />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_nine_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_nine_lng} 
    name='sec_extended_uncertaintyes_nine_lng'  />
    </div>

    <div className="form-group">
<p onClick={nine_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Lng_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_nine}
   name='lng_deviation_nine' id='lng_deviation_nine' />
    <label htmlFor="lng_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation_lng} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sec_Illum_references_ten_lng">Стойност на осветеността:</label>
    <select  name='sec_Illum_references_ten_lng' onChange={onChange} 
    >
    <option value="" isselected={sec_Illum_references_ten_lng === "" ? "Избери" 
    : sec_Illum_references_ten_lng} hidden="hidden">
    {sec_Illum_references_ten_lng}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sec_Illum_references_ten_lng===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>

<div className="form-group">
    <label htmlFor="sec_measurement_results_ten_lng">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_measurement_results_ten_lng} 
    name="sec_measurement_results_ten_lng"  />
    </div>
    <div className="form-group">
    <label htmlFor="sec_extended_uncertaintyes_ten_lng">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={sec_extended_uncertaintyes_ten_lng} 
    name='sec_extended_uncertaintyes_ten_lng'  />
    </div>

    <div className="form-group">
<p onClick={ten_calkDeviation_lng} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    { Lng_deviation_ten } %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={lng_deviation_ten}
   name='lng_deviation_ten' id='lng_deviation_ten' />
     <label htmlFor="lng_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation_lng} className="btn btn-block">Изчисти</div>
    </div> 
    </div>
    )
}
export default Second


