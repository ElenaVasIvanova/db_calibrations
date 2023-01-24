
import React, {useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Ninth({onChange,
  lamp_types_nine,
  lamp_stabilityes_nine,
  ninth_deviation_one, 
  ninth_deviation_two, 
  ninth_deviation_three,
  ninth_deviation_four,
  ninth_deviation_five,
  ninth_deviation_six, 
  ninth_deviation_seven,
  ninth_deviation_eight,
  ninth_deviation_nine,
  ninth_deviation_ten,
  ninth_measurement_results_one,
  ninth_measurement_results_two,
  ninth_measurement_results_three,
  ninth_measurement_results_four,
  ninth_measurement_results_five,
  ninth_measurement_results_six,
  ninth_measurement_results_seven,
  ninth_measurement_results_eight,
  ninth_measurement_results_nine,
  ninth_measurement_results_ten,
  ninth_extended_uncertaintyes_one,
  ninth_extended_uncertaintyes_two,
  ninth_extended_uncertaintyes_three,
  ninth_extended_uncertaintyes_four,
  ninth_extended_uncertaintyes_five,
  ninth_extended_uncertaintyes_six,
  ninth_extended_uncertaintyes_seven,
  ninth_extended_uncertaintyes_eight,
  ninth_extended_uncertaintyes_nine,
  ninth_extended_uncertaintyes_ten,
  ninth_Illum_references_one,
  ninth_Illum_references_two,
  ninth_Illum_references_three,
  ninth_Illum_references_four,
  ninth_Illum_references_five,
  ninth_Illum_references_six,
  ninth_Illum_references_seven,
  ninth_Illum_references_eight,
  ninth_Illum_references_nine,
  ninth_Illum_references_ten,  
}) {

const [Ninth_deviation_one, setNinth_Deviation_one] = useState(null);
const [Ninth_deviation_two, setNinth_Deviation_two] = useState(null);
const [Ninth_deviation_three, setNinth_Deviation_three] = useState(null);
const [Ninth_deviation_four, setNinth_Deviation_four] = useState(null);
const [Ninth_deviation_five, setNinth_Deviation_five] = useState(null);
const [Ninth_deviation_six, setNinth_Deviation_six] = useState(null);
const [Ninth_deviation_seven, setNinth_Deviation_seven] = useState(null);
const [Ninth_deviation_eight, setNinth_Deviation_eight] = useState(null);
const [Ninth_deviation_nine, setNinth_Deviation_nine] = useState(null);
const [Ninth_deviation_ten, setNinth_Deviation_ten] = useState(null);

const one_calkDeviation_ninth = () => {
  const Ninth_deviation_one = (((ninth_measurement_results_one-ninth_Illum_references_one)/ninth_Illum_references_one)*100).toFixed(2)
  setNinth_Deviation_one(Ninth_deviation_one);
  }
const one_clearDeviation_ninth = () => {
  setNinth_Deviation_one('');
  };

const two_calkDeviation_ninth = () => {
  const Ninth_deviation_two = (((ninth_measurement_results_two-ninth_Illum_references_two)/ninth_Illum_references_two)*100).toFixed(2)
  setNinth_Deviation_two(Ninth_deviation_two);
  }
const two_clearDeviation = () => {
  setNinth_Deviation_two('');
  };
const three_calkDeviation_ninth = () => {
  const Ninth_deviation_three = (((ninth_measurement_results_three-ninth_Illum_references_three)/ninth_Illum_references_three)*100).toFixed(2)
  setNinth_Deviation_three(Ninth_deviation_three);
  }
const three_clearDeviation = () => {
  setNinth_Deviation_three('');
  };
const four_calkDeviation_ninth = () => {
  const Ninth_deviation_four = (((ninth_measurement_results_four-ninth_Illum_references_four)/ninth_Illum_references_four)*100).toFixed(2)
  setNinth_Deviation_four(Ninth_deviation_four);
  }
const four_clearDeviation = () => {
  setNinth_Deviation_four('');
  };
const five_calkDeviation_ninth = () => {
  const Ninth_deviation_five = (((ninth_measurement_results_five-ninth_Illum_references_five)/ninth_Illum_references_five)*100).toFixed(2)
  setNinth_Deviation_five(Ninth_deviation_five);
  }
const five_clearDeviation = () => {
  setNinth_Deviation_five('');
  };
const six_calkDeviation_ninth = () => {
  const Ninth_deviation_six = (((ninth_measurement_results_six-ninth_Illum_references_six)/ninth_Illum_references_six)*100).toFixed(2)
  setNinth_Deviation_six(Ninth_deviation_six);
  }
const six_clearDeviation = () => {
  setNinth_Deviation_six('');
  };
const seven_calkDeviation_ninth = () => {
  const Ninth_deviation_seven = (((ninth_measurement_results_seven-ninth_Illum_references_seven)/ninth_Illum_references_seven)*100).toFixed(2)
  setNinth_Deviation_seven(Ninth_deviation_seven);
  }
const seven_clearDeviation = () => {
  setNinth_Deviation_seven('');
  };
const eight_calkDeviation_ninth = () => {
  const Ninth_deviation_eight = (((ninth_measurement_results_eight-ninth_Illum_references_eight)/ninth_Illum_references_eight)*100).toFixed(2)
  setNinth_Deviation_eight(Ninth_deviation_eight);
  }
const eight_clearDeviation = () => {
  setNinth_Deviation_eight('');
  };
const nine_calkDeviation_ninth = () => {
  const Ninth_deviation_nine = (((ninth_measurement_results_nine-ninth_Illum_references_nine)/ninth_Illum_references_nine)*100).toFixed(2)
  setNinth_Deviation_nine(Ninth_deviation_nine);
  }
const nine_clearDeviation = () => {
  setNinth_Deviation_nine('');
  };
const ten_calkDeviation_ninth = () => {
  const Ninth_deviation_ten = (((ninth_measurement_results_ten-ninth_Illum_references_ten)/ninth_Illum_references_ten)*100).toFixed(2)
  setNinth_Deviation_ten(Ninth_deviation_ten);
  };
const ten_clearDeviation = () => {
  setNinth_Deviation_ten('');
  };
   return (
    <div >
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_nine'
      value={lamp_type.name}
      checked={lamp_types_nine === lamp_type.name}
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
    name='lamp_stabilityes_nine'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_nine ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_nine'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_nine === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_one">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_one'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_one === "" ? "Избери" 
    : ninth_Illum_references_one} hidden="hidden">
    {ninth_Illum_references_one}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_one===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_one">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_measurement_results_one} 
    name='ninth_measurement_results_one' id='ninth_measurement_results_one' />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_one">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_one} 
    name='ninth_extended_uncertaintyes_one' id='ninth_extended_uncertaintyes_one' />
    </div>

<div className="form-group">
<p onClick={one_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_one}
   name='ninth_deviation_one' id='ninth_deviation_one' />
    <label htmlFor="ninth_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_ninth} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_two">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_two'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_two === "" ? "Избери" 
    : ninth_Illum_references_two} hidden="hidden">
    {ninth_Illum_references_two}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_two===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_two">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_measurement_results_two} 
    name='ninth_measurement_results_two' id='ninth_measurement_results_two' />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_two">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_two} 
    name='ninth_extended_uncertaintyes_two' id='ninth_extended_uncertaintyes_two' />
    </div>

<div className="form-group">
<p onClick={two_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_two}
   name='ninth_deviation_two' id='ninth_deviation_two' />
    <label htmlFor="ninth_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_three">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_three'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_three === "" ? "Избери" 
    : ninth_Illum_references_three} hidden="hidden">
    {ninth_Illum_references_three}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_three===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_three">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_measurement_results_three} 
    name='ninth_measurement_results_three' id='ninth_measurement_results_three' />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_three">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_three} 
    name='ninth_extended_uncertaintyes_three' id='ninth_extended_uncertaintyes_three' />
    </div>


<div className="form-group">
<p onClick={three_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_three}
   name='ninth_deviation_three' id='ninth_deviation_three' />
    <label htmlFor="ninth_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_four">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_four'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_four === "" ? "Избери" 
    : ninth_Illum_references_four} hidden="hidden">
    {ninth_Illum_references_four}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_four===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_four">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
    onChange={onChange}
    value={ninth_measurement_results_four} 
    name='ninth_measurement_results_four'  />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_four">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_four} 
    name='ninth_extended_uncertaintyes_four'  />
    </div>


<div className="form-group">
<p onClick={four_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_four}
   name='ninth_deviation_four' id='ninth_deviation_four' />
    <label htmlFor="ninth_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
<div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_five">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_five'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_five === "" ? "Избери" 
    : ninth_Illum_references_five} hidden="hidden">
    {ninth_Illum_references_five}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_five===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_five">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_measurement_results_five} 
    name='ninth_measurement_results_five'  />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_five">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_five} 
    name='ninth_extended_uncertaintyes_five'  />
    </div>

<div className="form-group">
<p onClick={five_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_five}
   name='ninth_deviation_five' id='ninth_deviation_five' />
    <label htmlFor="ninth_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_six">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_six'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_six === "" ? "Избери" 
    : ninth_Illum_references_six} hidden="hidden">
    {ninth_Illum_references_six}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_six===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_six">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_measurement_results_six} 
    name='ninth_measurement_results_six'  />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_six">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_six} 
    name='ninth_extended_uncertaintyes_six'  />
    </div>



 <div className="form-group">
<p onClick={six_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_six}
   name='ninth_deviation_six' id='ninth_deviation_six' />
    <label htmlFor="ninth_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>





    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_seven">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_seven'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_seven === "" ? "Избери" 
    : ninth_Illum_references_seven} hidden="hidden">
    {ninth_Illum_references_seven}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_seven===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_seven">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_measurement_results_seven} 
    name='ninth_measurement_results_seven'  />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_seven">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_seven} 
    name='ninth_extended_uncertaintyes_seven'  />
    </div>

<div className="form-group">
<p onClick={seven_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_seven}
   name='ninth_deviation_seven' id='ninth_deviation_seven' />
    <label htmlFor="ninth_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>



    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_eight">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_eight'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_eight === "" ? "Избери" 
    : ninth_Illum_references_eight} hidden="hidden">
    {ninth_Illum_references_eight}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_eight===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_eight">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_measurement_results_eight} 
    name='ninth_measurement_results_eight'  />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_eight">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_eight} 
    name='ninth_extended_uncertaintyes_eight'  />
    </div>

<div className="form-group">
<p onClick={eight_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_eight}
   name='ninth_deviation_eight' id='ninth_deviation_eight' />
    <label htmlFor="ninth_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_nine">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_nine'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_nine === "" ? "Избери" 
    : ninth_Illum_references_nine} hidden="hidden">
    {ninth_Illum_references_nine}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_nine===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_nine">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_measurement_results_nine} 
    name='ninth_measurement_results_nine'  />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_nine">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_nine} 
    name='ninth_extended_uncertaintyes_nine'  />
    </div>

<div className="form-group">
<p onClick={nine_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_nine}
   name='ninth_deviation_nine' id='ninth_deviation_nine' />
    <label htmlFor="ninth_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>




    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="ninth_Illum_references_ten">Стойност на осветеността:</label>
    <select  name='ninth_Illum_references_ten'onChange={onChange} 
    >
    <option value="" isselected={ninth_Illum_references_ten === "" ? "Избери" 
    : ninth_Illum_references_ten} hidden="hidden">
    {ninth_Illum_references_ten}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={ninth_Illum_references_ten===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ninth_measurement_results_ten">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_measurement_results_ten} 
    name='ninth_measurement_results_ten'  />
    </div>
    <div className="form-group">
    <label htmlFor="ninth_extended_uncertaintyes_ten">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ninth_extended_uncertaintyes_ten} 
    name='ninth_extended_uncertaintyes_ten'  />
    </div>

<div className="form-group">
<p onClick={ten_calkDeviation_ninth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Ninth_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={ninth_deviation_ten}
   name='ninth_deviation_ten' id='ninth_deviation_ten' />
    <label htmlFor="ninth_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    </div>
    )
}
export default Ninth