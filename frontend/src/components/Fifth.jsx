import React, {useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Fifth({onChange,
  lamp_types_five,
  lamp_stabilityes_five,
  fifth_deviation_one, 
  fifth_deviation_two, 
  fifth_deviation_three,
  fifth_deviation_four,
  fifth_deviation_five,
  fifth_deviation_six, 
  fifth_deviation_seven,
  fifth_deviation_eight,
  fifth_deviation_nine,
  fifth_deviation_ten,
  fifth_measurement_results_one,
  fifth_measurement_results_two,
  fifth_measurement_results_three,
  fifth_measurement_results_four,
  fifth_measurement_results_five,
  fifth_measurement_results_six,
  fifth_measurement_results_seven,
  fifth_measurement_results_eight,
  fifth_measurement_results_nine,
  fifth_measurement_results_ten,
  fifth_extended_uncertaintyes_one,
  fifth_extended_uncertaintyes_two,
  fifth_extended_uncertaintyes_three,
  fifth_extended_uncertaintyes_four,
  fifth_extended_uncertaintyes_five,
  fifth_extended_uncertaintyes_six,
  fifth_extended_uncertaintyes_seven,
  fifth_extended_uncertaintyes_eight,
  fifth_extended_uncertaintyes_nine,
  fifth_extended_uncertaintyes_ten,
  fifth_Illum_references_one,
  fifth_Illum_references_two,
  fifth_Illum_references_three,
  fifth_Illum_references_four,
  fifth_Illum_references_five,
  fifth_Illum_references_six,
  fifth_Illum_references_seven,
  fifth_Illum_references_eight,
  fifth_Illum_references_nine,
  fifth_Illum_references_ten,}) {

const [Fifth_deviation_one, setFifth_Deviation_one] = useState(null);
const [Fifth_deviation_two, setFifth_Deviation_two] = useState(null);
const [Fifth_deviation_three, setFifth_Deviation_three] = useState(null);
const [Fifth_deviation_four, setFifth_Deviation_four] = useState(null);
const [Fifth_deviation_five, setFifth_Deviation_five] = useState(null);
const [Fifth_deviation_six, setFifth_Deviation_six] = useState(null);
const [Fifth_deviation_seven, setFifth_Deviation_seven] = useState(null);
const [Fifth_deviation_eight, setFifth_Deviation_eight] = useState(null);
const [Fifth_deviation_nine, setFifth_Deviation_nine] = useState(null);
const [Fifth_deviation_ten, setFifth_Deviation_ten] = useState(null);

const one_calkDeviation_fifth = () => {
  const Fifth_deviation_one = (((fifth_measurement_results_one-fifth_Illum_references_one)/fifth_Illum_references_one)*100).toFixed(2)
  setFifth_Deviation_one(Fifth_deviation_one);
  }
const one_clearDeviation_fifth = () => {
  setFifth_Deviation_one('');
  };

const two_calkDeviation_fifth = () => {
  const Fifth_deviation_two = (((fifth_measurement_results_two-fifth_Illum_references_two)/fifth_Illum_references_two)*100).toFixed(2)
  setFifth_Deviation_two(Fifth_deviation_two);
  }
const two_clearDeviation = () => {
  setFifth_Deviation_two('');
  };
const three_calkDeviation_fifth = () => {
  const Fifth_deviation_three = (((fifth_measurement_results_three-fifth_Illum_references_three)/fifth_Illum_references_three)*100).toFixed(2)
  setFifth_Deviation_three(Fifth_deviation_three);
  }
const three_clearDeviation = () => {
  setFifth_Deviation_three('');
  };
const four_calkDeviation_fifth = () => {
  const Fifth_deviation_four = (((fifth_measurement_results_four-fifth_Illum_references_four)/fifth_Illum_references_four)*100).toFixed(2)
  setFifth_Deviation_four(Fifth_deviation_four);
  }
const four_clearDeviation = () => {
  setFifth_Deviation_four('');
  };
const five_calkDeviation_fifth = () => {
  const Fifth_deviation_five = (((fifth_measurement_results_five-fifth_Illum_references_five)/fifth_Illum_references_five)*100).toFixed(2)
  setFifth_Deviation_five(Fifth_deviation_five);
  }
const five_clearDeviation = () => {
  setFifth_Deviation_five('');
  };
const six_calkDeviation_fifth = () => {
  const Fifth_deviation_six = (((fifth_measurement_results_six-fifth_Illum_references_six)/fifth_Illum_references_six)*100).toFixed(2)
  setFifth_Deviation_six(Fifth_deviation_six);
  }
const six_clearDeviation = () => {
  setFifth_Deviation_six('');
  };
const seven_calkDeviation_fifth = () => {
  const Fifth_deviation_seven = (((fifth_measurement_results_seven-fifth_Illum_references_seven)/fifth_Illum_references_seven)*100).toFixed(2)
  setFifth_Deviation_seven(Fifth_deviation_seven);
  }
const seven_clearDeviation = () => {
  setFifth_Deviation_seven('');
  };
const eight_calkDeviation_fifth = () => {
  const Fifth_deviation_eight = (((fifth_measurement_results_eight-fifth_Illum_references_eight)/fifth_Illum_references_eight)*100).toFixed(2)
  setFifth_Deviation_eight(Fifth_deviation_eight);
  }
const eight_clearDeviation = () => {
  setFifth_Deviation_eight('');
  };
const nine_calkDeviation_fifth = () => {
  const Fifth_deviation_nine = (((fifth_measurement_results_nine-fifth_Illum_references_nine)/fifth_Illum_references_nine)*100).toFixed(2)
  setFifth_Deviation_nine(Fifth_deviation_nine);
  }
const nine_clearDeviation = () => {
  setFifth_Deviation_nine('');
  };
const ten_calkDeviation_fifth = () => {
  const Fifth_deviation_ten = (((fifth_measurement_results_ten-fifth_Illum_references_ten)/fifth_Illum_references_ten)*100).toFixed(2)
  setFifth_Deviation_ten(Fifth_deviation_ten);
  };
const ten_clearDeviation = () => {
  setFifth_Deviation_ten('');
  };

  return (
    <div >
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_five'
      value={lamp_type.name}
      checked={lamp_types_five === lamp_type.name}
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
    name='lamp_stabilityes_five'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_five ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_five'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_five === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_one">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_one'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_one === "" ? "Избери" 
    : fifth_Illum_references_one} hidden="hidden">
    {fifth_Illum_references_one}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_one===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_one">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_measurement_results_one} 
    name='fifth_measurement_results_one' id='fifth_measurement_results_one' />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_one">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_one} 
    name='fifth_extended_uncertaintyes_one' id='fifth_extended_uncertaintyes_one' />
    </div>
<div className="form-group">
<p onClick={one_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_one}
   name='fifth_deviation_one' id='fifth_deviation_one' />
    <label htmlFor="fifth_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_fifth} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_two">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_two'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_two === "" ? "Избери" 
    : fifth_Illum_references_two} hidden="hidden">
    {fifth_Illum_references_two}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_two===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_two">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_measurement_results_two} 
    name='fifth_measurement_results_two' id='fifth_measurement_results_two' />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_two">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_two} 
    name='fifth_extended_uncertaintyes_two' id='fifth_extended_uncertaintyes_two' />
    </div>

<div className="form-group">
<p onClick={two_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_two}
   name='fifth_deviation_two' id='fifth_deviation_two' />
    <label htmlFor="fifth_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_three">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_three'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_three === "" ? "Избери" 
    : fifth_Illum_references_three} hidden="hidden">
    {fifth_Illum_references_three}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_three===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_three">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_measurement_results_three} 
    name='fifth_measurement_results_three' id='fifth_measurement_results_three' />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_three">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_three} 
    name='fifth_extended_uncertaintyes_three' id='fifth_extended_uncertaintyes_three' />
    </div>
<div className="form-group">
<p onClick={three_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_three}
   name='fifth_deviation_three' id='fifth_deviation_three' />
    <label htmlFor="fifth_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_four">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_four'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_four === "" ? "Избери" 
    : fifth_Illum_references_four} hidden="hidden">
    {fifth_Illum_references_four}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_four===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_four">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
    onChange={onChange}
    value={fifth_measurement_results_four} 
    name='fifth_measurement_results_four'  />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_four">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_four} 
    name='fifth_extended_uncertaintyes_four'  />
    </div>

    <div className="form-group">
<p onClick={four_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_four}
   name='fifth_deviation_four' id='fifth_deviation_four' />
    <label htmlFor="fifth_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
<div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_five">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_five'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_five === "" ? "Избери" 
    : fifth_Illum_references_five} hidden="hidden">
    {fifth_Illum_references_five}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_five===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_five">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_measurement_results_five} 
    name='fifth_measurement_results_five'  />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_five">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_five} 
    name='fifth_extended_uncertaintyes_five'  />
    </div>
<div className="form-group">
<p onClick={five_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_five}
   name='fifth_deviation_five' id='fifth_deviation_five' />
    <label htmlFor="fifth_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_six">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_six'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_six === "" ? "Избери" 
    : fifth_Illum_references_six} hidden="hidden">
    {fifth_Illum_references_six}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_six===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_six">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_measurement_results_six} 
    name='fifth_measurement_results_six'  />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_six">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_six} 
    name='fifth_extended_uncertaintyes_six'  />
    </div>

<div className="form-group">
<p onClick={six_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_six}
   name='fifth_deviation_six' id='fifth_deviation_six' />
    <label htmlFor="fifth_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_seven">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_seven'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_seven === "" ? "Избери" 
    : fifth_Illum_references_seven} hidden="hidden">
    {fifth_Illum_references_seven}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_seven===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_seven">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_measurement_results_seven} 
    name='fifth_measurement_results_seven'  />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_seven">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_seven} 
    name='fifth_extended_uncertaintyes_seven'  />
    </div>

    <div className="form-group">
<p onClick={seven_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_seven}
   name='fifth_deviation_seven' id='fifth_deviation_seven' />
    <label htmlFor="fifth_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_eight">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_eight'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_eight === "" ? "Избери" 
    : fifth_Illum_references_eight} hidden="hidden">
    {fifth_Illum_references_eight}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_eight===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_eight">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_measurement_results_eight} 
    name='fifth_measurement_results_eight'  />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_eight">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_eight} 
    name='fifth_extended_uncertaintyes_eight'  />
    </div>
<div className="form-group">
<p onClick={eight_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_eight}
   name='fifth_deviation_eight' id='fifth_deviation_eight' />
    <label htmlFor="fifth_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_nine">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_nine'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_nine === "" ? "Избери" 
    : fifth_Illum_references_nine} hidden="hidden">
    {fifth_Illum_references_nine}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_nine===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_nine">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_measurement_results_nine} 
    name='fifth_measurement_results_nine'  />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_nine">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_nine} 
    name='fifth_extended_uncertaintyes_nine'  />
    </div>
     <div className="form-group">
<p onClick={nine_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_nine}
   name='fifth_deviation_nine' id='fifth_deviation_nine' />
    <label htmlFor="fifth_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fifth_Illum_references_ten">Стойност на осветеността:</label>
    <select  name='fifth_Illum_references_ten'onChange={onChange} 
    >
    <option value="" isselected={fifth_Illum_references_ten === "" ? "Избери" 
    : fifth_Illum_references_ten} hidden="hidden">
    {fifth_Illum_references_ten}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fifth_Illum_references_ten===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fifth_measurement_results_ten">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_measurement_results_ten} 
    name='fifth_measurement_results_ten'  />
    </div>
    <div className="form-group">
    <label htmlFor="fifth_extended_uncertaintyes_ten">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fifth_extended_uncertaintyes_ten} 
    name='fifth_extended_uncertaintyes_ten'  />
    </div>

<div className="form-group">
<p onClick={ten_calkDeviation_fifth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Fifth_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fifth_deviation_ten}
   name='fifth_deviation_ten' id='fifth_deviation_ten' />
    <label htmlFor="fifth_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    </div>
    )
}
export default Fifth