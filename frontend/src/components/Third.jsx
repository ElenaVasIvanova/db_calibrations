import React, { useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Third({onChange,
  third_deviation_one, 
  third_deviation_two, 
  third_deviation_three,
  third_deviation_four,
  third_deviation_five,
  third_deviation_six, 
  third_deviation_seven,
  third_deviation_eight,
  third_deviation_nine,
  third_deviation_ten,
  lamp_types_three, 
  lamp_stabilityes_three,
  third_measurement_results_one,  
  third_measurement_results_two,  
  third_measurement_results_three,  
  third_measurement_results_four,  
  third_measurement_results_five,  
  third_measurement_results_six,  
  third_measurement_results_seven,  
  third_measurement_results_eight,  
  third_measurement_results_nine,  
  third_measurement_results_ten,  
  third_extended_uncertaintyes_one,  
  third_extended_uncertaintyes_two,  
  third_extended_uncertaintyes_three,  
  third_extended_uncertaintyes_four,  
  third_extended_uncertaintyes_five,  
  third_extended_uncertaintyes_six,  
  third_extended_uncertaintyes_seven,  
  third_extended_uncertaintyes_eight,  
  third_extended_uncertaintyes_nine,  
  third_extended_uncertaintyes_ten,  
  third_Illum_references_one ,  
  third_Illum_references_two ,  
  third_Illum_references_three ,  
  third_Illum_references_four ,  
  third_Illum_references_five ,  
  third_Illum_references_six ,  
  third_Illum_references_seven ,  
  third_Illum_references_eight ,  
  third_Illum_references_nine ,  
  third_Illum_references_ten 
}) {

const [Third_deviation_one, setThird_Deviation_one] = useState(null);
const [Third_deviation_two, setThird_Deviation_two] = useState(null);
const [Third_deviation_three, setThird_Deviation_three] = useState(null);
const [Third_deviation_four, setThird_Deviation_four] = useState(null);
const [Third_deviation_five, setThird_Deviation_five] = useState(null);
const [Third_deviation_six, setThird_Deviation_six] = useState(null);
const [Third_deviation_seven, setThird_Deviation_seven] = useState(null);
const [Third_deviation_eight, setThird_Deviation_eight] = useState(null);
const [Third_deviation_nine, setThird_Deviation_nine] = useState(null);
const [Third_deviation_ten, setThird_Deviation_ten] = useState(null);

const one_calkDeviation_third = () => {
  const Third_deviation_one = (((third_measurement_results_one-third_Illum_references_one)/third_Illum_references_one)*100).toFixed(2)
  setThird_Deviation_one(Third_deviation_one);
  }
const one_clearDeviation_third = () => {
  setThird_Deviation_one('');
  };

const two_calkDeviation_third = () => {
  const Third_deviation_two = (((third_measurement_results_two-third_Illum_references_two)/third_Illum_references_two)*100).toFixed(2)
  setThird_Deviation_two(Third_deviation_two);
  }
const two_clearDeviation = () => {
  setThird_Deviation_two('');
  };
const three_calkDeviation_third = () => {
  const Third_deviation_three = (((third_measurement_results_three-third_Illum_references_three)/third_Illum_references_three)*100).toFixed(2)
  setThird_Deviation_three(Third_deviation_three);
  }
const three_clearDeviation = () => {
  setThird_Deviation_three('');
  };
const four_calkDeviation_third = () => {
  const Third_deviation_four = (((third_measurement_results_four-third_Illum_references_four)/third_Illum_references_four)*100).toFixed(2)
  setThird_Deviation_four(Third_deviation_four);
  }
const four_clearDeviation = () => {
  setThird_Deviation_four('');
  };
const five_calkDeviation_third = () => {
  const Third_deviation_five = (((third_measurement_results_five-third_Illum_references_five)/third_Illum_references_five)*100).toFixed(2)
  setThird_Deviation_five(Third_deviation_five);
  }
const five_clearDeviation = () => {
  setThird_Deviation_five('');
  };
const six_calkDeviation_third = () => {
  const Third_deviation_six = (((third_measurement_results_six-third_Illum_references_six)/third_Illum_references_six)*100).toFixed(2)
  setThird_Deviation_six(Third_deviation_six);
  }
const six_clearDeviation = () => {
  setThird_Deviation_six('');
  };
const seven_calkDeviation_third = () => {
  const Third_deviation_seven = (((third_measurement_results_seven-third_Illum_references_seven)/third_Illum_references_seven)*100).toFixed(2)
  setThird_Deviation_seven(Third_deviation_seven);
  }
const seven_clearDeviation = () => {
  setThird_Deviation_seven('');
  };
const eight_calkDeviation_third = () => {
  const Third_deviation_eight = (((third_measurement_results_eight-third_Illum_references_eight)/third_Illum_references_eight)*100).toFixed(2)
  setThird_Deviation_eight(Third_deviation_eight);
  }
const eight_clearDeviation = () => {
  setThird_Deviation_eight('');
  };
const nine_calkDeviation_third = () => {
  const Third_deviation_nine = (((third_measurement_results_nine-third_Illum_references_nine)/third_Illum_references_nine)*100).toFixed(2)
  setThird_Deviation_nine(Third_deviation_nine);
  }
const nine_clearDeviation = () => {
  setThird_Deviation_nine('');
  };
const ten_calkDeviation_third = () => {
  const Third_deviation_ten = (((third_measurement_results_ten-third_Illum_references_ten)/third_Illum_references_ten)*100).toFixed(2)
  setThird_Deviation_ten(Third_deviation_ten);
  };
const ten_clearDeviation = () => {
  setThird_Deviation_ten('');
  };



  return (
   <div >
   <div>      
   <h1>Тип лампа</h1>
   {lamp_types.map((lamp_type, id, name) => 
    <div id="check_radio">
    <label key={id} >
    <input 
    name='lamp_types_three'
    value={lamp_type.name}
    checked={lamp_types_three === lamp_type.name}
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
   name='lamp_stabilityes_three'
   type="radio"
   value='0,1%'
   checked={lamp_stabilityes_three ==='0,1%'}
   onChange={onChange}
   />&nbsp;&nbsp;0,1%</label> 
   </div>
   <div id="check_radio">
   <label><input
   name='lamp_stabilityes_three'
   type="radio"
   value='0,5%'
   checked={lamp_stabilityes_three === '0,5%'}
   onChange={onChange}
   />&nbsp;&nbsp;0,5%</label>
   </div>
   </div>
   <h4>Първа точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_one">Стойност на осветеността:</label>
   <select  name='third_Illum_references_one'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_one === "" ? "Избери" 
   : third_Illum_references_one} hidden="hidden">
   {third_Illum_references_one}
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_one===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_one">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_measurement_results_one} 
   name='third_measurement_results_one' id='third_measurement_results_one' />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_one">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_one} 
   name='third_extended_uncertaintyes_one' id='third_extended_uncertaintyes_one' />
   </div>
<div className="form-group">
<p onClick={one_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Third_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_one}
   name='third_deviation_one' id='third_deviation_one' />
    <label htmlFor="third_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_third} className="btn btn-block">Изчисти</div>

   </div> 
   <h4>Втора точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_two">Стойност на осветеността:</label>
   <select  name='third_Illum_references_two'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_two === "" ? "Избери" 
   : third_Illum_references_two} hidden="hidden">
   {third_Illum_references_two}
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_two===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_two">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_measurement_results_two} 
   name='third_measurement_results_two' id='third_measurement_results_two' />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_two">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_two} 
   name='third_extended_uncertaintyes_two' id='third_extended_uncertaintyes_two' />
   </div>


<div className="form-group">
<p onClick={two_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Third_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_two}
   name='third_deviation_two' id='third_deviation_two' />
    <label htmlFor="third_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>


   </div> 
   <h4>Трета точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_three">Стойност на осветеността:</label>
   <select  name='third_Illum_references_three'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_three === "" ? "Избери" 
   : third_Illum_references_three} hidden="hidden">
   {third_Illum_references_three}
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_three===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_three">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_measurement_results_three} 
   name='third_measurement_results_three' id='third_measurement_results_three' />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_three">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_three} 
   name='third_extended_uncertaintyes_three' id='third_extended_uncertaintyes_three' />
   </div>


<div className="form-group">
<p onClick={three_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Third_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_three}
   name='third_deviation_three' id='third_deviation_three' />
    <label htmlFor="third_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>


   </div> 
   <h4>Четвърта точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_four">Стойност на осветеността:</label>
   <select  name='third_Illum_references_four'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_four === "" ? "Избери" 
   : third_Illum_references_four} hidden="hidden">
   {third_Illum_references_four}
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_four===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_four">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
   onChange={onChange}
   value={third_measurement_results_four} 
   name='third_measurement_results_four'  />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_four">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_four} 
   name='third_extended_uncertaintyes_four'  />
   </div>

   <div className="form-group">
<p onClick={four_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Third_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_four}
   name='third_deviation_four' id='third_deviation_four' />
    <label htmlFor="third_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
<div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>
   </div> 
   <h4>Пета точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_five">Стойност на осветеността:</label>
   <select  name='third_Illum_references_five'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_five === "" ? "Избери" 
   : third_Illum_references_five} hidden="hidden">
   {third_Illum_references_five}
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_five===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_five">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_measurement_results_five} 
   name='third_measurement_results_five'  />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_five">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_five} 
   name='third_extended_uncertaintyes_five'  />
   </div>
 <div className="form-group">
<p onClick={five_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Third_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_five}
   name='third_deviation_five' id='third_deviation_five' />
    <label htmlFor="third_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>


   </div> 
   <h4>Шеста точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_six">Стойност на осветеността:</label>
   <select  name='third_Illum_references_six'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_six === "" ? "Избери" 
   : third_Illum_references_six} hidden="hidden">
   {third_Illum_references_six}
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_six===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_six">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_measurement_results_six} 
   name='third_measurement_results_six'  />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_six">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_six} 
   name='third_extended_uncertaintyes_six'  />
   </div>

<div className="form-group">
<p onClick={six_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Third_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_six}
   name='third_deviation_six' id='third_deviation_six' />
    <label htmlFor="third_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>


   </div> 
   <h4>Седма точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_seven">Стойност на осветеността:</label>
   <select  name='third_Illum_references_seven'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_seven === "" ? "Избери" 
   : third_Illum_references_seven} hidden="hidden">
   {third_Illum_references_seven}
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_seven===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_seven">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_measurement_results_seven} 
   name='third_measurement_results_seven'  />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_seven">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_seven} 
   name='third_extended_uncertaintyes_seven'  />
   </div>

<div className="form-group">
<p onClick={seven_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Third_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_seven}
   name='third_deviation_seven' id='third_deviation_seven' />
    <label htmlFor="third_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>



   </div> 
   <h4>Осма точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_eight">Стойност на осветеността:</label>
   <select  name='third_Illum_references_eight'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_eight === "" ? "Избери" 
   : third_Illum_references_eight} hidden="hidden">
   {third_Illum_references_eight}
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_eight===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_eight">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_measurement_results_eight} 
   name='third_measurement_results_eight'  />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_eight">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_eight} 
   name='third_extended_uncertaintyes_eight'  />
   </div>

<div className="form-group">
<p onClick={eight_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Third_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_eight}
   name='third_deviation_eight' id='third_deviation_eight' />
    <label htmlFor="third_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>

   </div> 
   <h4>Девета точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_nine">Стойност на осветеността:</label>
   <select  name='third_Illum_references_nine'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_nine === "" ? "Избери" 
   : third_Illum_references_nine} hidden="hidden">
   {third_Illum_references_nine}
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_nine===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_nine">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_measurement_results_nine} 
   name='third_measurement_results_nine'  />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_nine">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_nine} 
   name='third_extended_uncertaintyes_nine'  />
   </div>
<div className="form-group">
<p onClick={nine_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Third_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_nine}
   name='third_deviation_nine' id='third_deviation_nine' />
    <label htmlFor="third_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>


   </div> 
   <h4>Десета точка на калибриране</h4>
   <hr />
   <div className="results">
   <div className="form-group">
   <label htmlFor="third_Illum_references_ten">Стойност на осветеността:</label>
   <select  name='third_Illum_references_ten'onChange={onChange} 
   >
   <option value="" isselected={third_Illum_references_ten  === "" ? "Избери" 
   : third_Illum_references_ten } hidden="hidden">
   {third_Illum_references_ten }
   </option> 
   {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={third_Illum_references_ten===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
   </select>
   </div>
   <div className="form-group">
   <label htmlFor="third_measurement_results_ten">Резултат от измерването:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_measurement_results_ten} 
   name='third_measurement_results_ten'  />
   </div>
   <div className="form-group">
   <label htmlFor="third_extended_uncertaintyes_ten">Разширена неопределеност:</label>
   <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
   value={third_extended_uncertaintyes_ten} 
   name='third_extended_uncertaintyes_ten'  />
   </div>
   <div className="form-group">
<p onClick={ten_calkDeviation_third} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Third_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={third_deviation_ten}
   name='third_deviation_ten' id='third_deviation_ten' />
    <label htmlFor="third_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>
   </div>
   </div>
   )
}
export default Third