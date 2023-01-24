import React, {useState} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function Fourth({onChange,
  lamp_types_four, 
  lamp_stabilityes_four,
  fourth_deviation_one, 
  fourth_deviation_two, 
  fourth_deviation_three,
  fourth_deviation_four,
  fourth_deviation_five,
  fourth_deviation_six, 
  fourth_deviation_seven,
  fourth_deviation_eight,
  fourth_deviation_nine,
  fourth_deviation_ten,
  lamp_types_three,  
  fourth_measurement_results_one, 
  fourth_measurement_results_two, 
  fourth_measurement_results_three, 
  fourth_measurement_results_four, 
  fourth_measurement_results_five, 
  fourth_measurement_results_six, 
  fourth_measurement_results_seven, 
  fourth_measurement_results_eight, 
  fourth_measurement_results_nine, 
  fourth_measurement_results_ten, 
  fourth_extended_uncertaintyes_one, 
  fourth_extended_uncertaintyes_two, 
  fourth_extended_uncertaintyes_three, 
  fourth_extended_uncertaintyes_four, 
  fourth_extended_uncertaintyes_five, 
  fourth_extended_uncertaintyes_six, 
  fourth_extended_uncertaintyes_seven, 
  fourth_extended_uncertaintyes_eight, 
  fourth_extended_uncertaintyes_nine, 
  fourth_extended_uncertaintyes_ten, 
  fourth_Illum_references_one, 
  fourth_Illum_references_two, 
  fourth_Illum_references_three, 
  fourth_Illum_references_four, 
  fourth_Illum_references_five, 
  fourth_Illum_references_six, 
  fourth_Illum_references_seven, 
  fourth_Illum_references_eight, 
  fourth_Illum_references_nine, 
  fourth_Illum_references_ten, 
}) {

const [Fourth_deviation_one, setFourth_Deviation_one] = useState(null);
const [Fourth_deviation_two, setFourth_Deviation_two] = useState(null);
const [Fourth_deviation_three, setFourth_Deviation_three] = useState(null);
const [Fourth_deviation_four, setFourth_Deviation_four] = useState(null);
const [Fourth_deviation_five, setFourth_Deviation_five] = useState(null);
const [Fourth_deviation_six, setFourth_Deviation_six] = useState(null);
const [Fourth_deviation_seven, setFourth_Deviation_seven] = useState(null);
const [Fourth_deviation_eight, setFourth_Deviation_eight] = useState(null);
const [Fourth_deviation_nine, setFourth_Deviation_nine] = useState(null);
const [Fourth_deviation_ten, setFourth_Deviation_ten] = useState(null);

const one_calkDeviation_fourth = () => {
  const Fourth_deviation_one = (((fourth_measurement_results_one-fourth_Illum_references_one)/fourth_Illum_references_one)*100).toFixed(2)
  setFourth_Deviation_one(Fourth_deviation_one);
  }
const one_clearDeviation_fourth = () => {
  setFourth_Deviation_one('');
  };

const two_calkDeviation_fourth = () => {
  const Fourth_deviation_two = (((fourth_measurement_results_two-fourth_Illum_references_two)/fourth_Illum_references_two)*100).toFixed(2)
  setFourth_Deviation_two(Fourth_deviation_two);
  }
const two_clearDeviation = () => {
  setFourth_Deviation_two('');
  };
const three_calkDeviation_fourth = () => {
  const Fourth_deviation_three = (((fourth_measurement_results_three-fourth_Illum_references_three)/fourth_Illum_references_three)*100).toFixed(2)
  setFourth_Deviation_three(Fourth_deviation_three);
  }
const three_clearDeviation = () => {
  setFourth_Deviation_three('');
  };
const four_calkDeviation_fourth = () => {
  const Fourth_deviation_four = (((fourth_measurement_results_four-fourth_Illum_references_four)/fourth_Illum_references_four)*100).toFixed(2)
  setFourth_Deviation_four(Fourth_deviation_four);
  }
const four_clearDeviation = () => {
  setFourth_Deviation_four('');
  };
const five_calkDeviation_fourth = () => {
  const Fourth_deviation_five = (((fourth_measurement_results_five-fourth_Illum_references_five)/fourth_Illum_references_five)*100).toFixed(2)
  setFourth_Deviation_five(Fourth_deviation_five);
  }
const five_clearDeviation = () => {
  setFourth_Deviation_five('');
  };
const six_calkDeviation_fourth = () => {
  const Fourth_deviation_six = (((fourth_measurement_results_six-fourth_Illum_references_six)/fourth_Illum_references_six)*100).toFixed(2)
  setFourth_Deviation_six(Fourth_deviation_six);
  }
const six_clearDeviation = () => {
  setFourth_Deviation_six('');
  };
const seven_calkDeviation_fourth = () => {
  const Fourth_deviation_seven = (((fourth_measurement_results_seven-fourth_Illum_references_seven)/fourth_Illum_references_seven)*100).toFixed(2)
  setFourth_Deviation_seven(Fourth_deviation_seven);
  }
const seven_clearDeviation = () => {
  setFourth_Deviation_seven('');
  };
const eight_calkDeviation_fourth = () => {
  const Fourth_deviation_eight = (((fourth_measurement_results_eight-fourth_Illum_references_eight)/fourth_Illum_references_eight)*100).toFixed(2)
  setFourth_Deviation_eight(Fourth_deviation_eight);
  }
const eight_clearDeviation = () => {
  setFourth_Deviation_eight('');
  };
const nine_calkDeviation_fourth = () => {
  const Fourth_deviation_nine = (((fourth_measurement_results_nine-fourth_Illum_references_nine)/fourth_Illum_references_nine)*100).toFixed(2)
  setFourth_Deviation_nine(Fourth_deviation_nine);
  }
const nine_clearDeviation = () => {
  setFourth_Deviation_nine('');
  };
const ten_calkDeviation_fourth = () => {
  const Fourth_deviation_ten = (((fourth_measurement_results_ten-fourth_Illum_references_ten)/fourth_Illum_references_ten)*100).toFixed(2)
  setFourth_Deviation_ten(Fourth_deviation_ten);
  };
const ten_clearDeviation = () => {
  setFourth_Deviation_ten('');
  };

  return (
    <div >
    <div>      
    <h1>Тип лампа</h1> 
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_four'
      value={lamp_type.name}
      checked={lamp_types_four === lamp_type.name}
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
    name='lamp_stabilityes_four'
    type="radio"
    value='0,1%'
    checked={lamp_stabilityes_four ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stabilityes_four'
    type="radio"
    value='0,5%'
    checked={lamp_stabilityes_four === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_one">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_one'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_one === "" ? "Избери" 
    : fourth_Illum_references_one} hidden="hidden">
    {fourth_Illum_references_one}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_one===Illuminance_reference}  
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_one">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_measurement_results_one} 
    name='fourth_measurement_results_one' id='fourth_measurement_results_one' />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_one">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_one} 
    name='fourth_extended_uncertaintyes_one' id='fourth_extended_uncertaintyes_one' />
    </div>
    <div className="form-group">
<p onClick={one_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 1
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_one}
   name='fourth_deviation_one' id='fourth_deviation_one' />
    <label htmlFor="fourth_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
<div onClick={one_clearDeviation_fourth} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_two">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_two'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_two === "" ? "Избери" 
    : fourth_Illum_references_two} hidden="hidden">
    {fourth_Illum_references_two}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_two===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_two">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_measurement_results_two} 
    name='fourth_measurement_results_two' id='fourth_measurement_results_two' />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_two">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_two} 
    name='fourth_extended_uncertaintyes_two' id='fourth_extended_uncertaintyes_two' />
    </div>

<div className="form-group">
<p onClick={two_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 2
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_two} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_two}
   name='fourth_deviation_two' id='fourth_deviation_two' />
    <label htmlFor="fourth_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
<div onClick={two_clearDeviation} className="btn btn-block">Изчисти</div>


    </div> 
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_three">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_three'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_three === "" ? "Избери" 
    : fourth_Illum_references_three} hidden="hidden">
    {fourth_Illum_references_three}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_three===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_three">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_measurement_results_three} 
    name='fourth_measurement_results_three' id='fourth_measurement_results_three' />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_three">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_three} 
    name='fourth_extended_uncertaintyes_three' id='fourth_extended_uncertaintyes_three' />
    </div>
    <div className="form-group">
<p onClick={three_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 3
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_three} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_three}
   name='fourth_deviation_three' id='fourth_deviation_three' />
    <label htmlFor="fourth_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
<div onClick={three_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_four">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_four'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_four === "" ? "Избери" 
    : fourth_Illum_references_four} hidden="hidden">
    {fourth_Illum_references_four}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_four===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_four">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control'
    onChange={onChange}
    value={fourth_measurement_results_four} 
    name='fourth_measurement_results_four'  />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_four">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_four} 
    name='fourth_extended_uncertaintyes_four'  />
    </div>
        <div className="form-group">
<p onClick={four_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 4
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_four} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_four}
   name='fourth_deviation_four' id='fourth_deviation_four' />
    <label htmlFor="fourth_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
<div onClick={four_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_five">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_five'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_five === "" ? "Избери" 
    : fourth_Illum_references_five} hidden="hidden">
    {fourth_Illum_references_five}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_five===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_five">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_measurement_results_five} 
    name='fourth_measurement_results_five'  />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_five">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_five} 
    name='fourth_extended_uncertaintyes_five'  />
    </div>
<div className="form-group">
<p onClick={five_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 5
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_five} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_five}
   name='fourth_deviation_five' id='fourth_deviation_five' />
    <label htmlFor="fourth_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
<div onClick={five_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_six">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_six'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_six === "" ? "Избери" 
    : fourth_Illum_references_six} hidden="hidden">
    {fourth_Illum_references_six}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_six===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_six">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_measurement_results_six} 
    name='fourth_measurement_results_six'  />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_six">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_six} 
    name='fourth_extended_uncertaintyes_six'  />
    </div>
    <div className="form-group">
<p onClick={six_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 6
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_six} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_six}
   name='fourth_deviation_six' id='fourth_deviation_six' />
    <label htmlFor="fourth_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
<div onClick={six_clearDeviation} className="btn btn-block">Изчисти</div>

    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_seven">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_seven'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_seven === "" ? "Избери" 
    : fourth_Illum_references_seven} hidden="hidden">
    {fourth_Illum_references_seven}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_seven===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_seven">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_measurement_results_seven} 
    name='fourth_measurement_results_seven'  />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_seven">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_seven} 
    name='fourth_extended_uncertaintyes_seven'  />
    </div>
    <div className="form-group">
<p onClick={seven_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 7
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_seven} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_seven}
   name='fourth_deviation_seven' id='fourth_deviation_seven' />
    <label htmlFor="fourth_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
<div onClick={seven_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_eight">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_eight'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_eight === "" ? "Избери" 
    : fourth_Illum_references_eight} hidden="hidden">
    {fourth_Illum_references_eight}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_eight===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_eight">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_measurement_results_eight} 
    name='fourth_measurement_results_eight'  />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_eight">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_eight} 
    name='fourth_extended_uncertaintyes_eight'  />
    </div>
    <div className="form-group">
<p onClick={eight_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 8
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_eight} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_eight}
   name='fourth_deviation_eight' id='fourth_deviation_eight' />
    <label htmlFor="fourth_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
<div onClick={eight_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_nine">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_nine'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_nine === "" ? "Избери" 
    : fourth_Illum_references_nine} hidden="hidden">
    {fourth_Illum_references_nine}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_nine===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_nine">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_measurement_results_nine} 
    name='fourth_measurement_results_nine'  />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_nine">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_nine} 
    name='fourth_extended_uncertaintyes_nine'  />
    </div>
    <div className="form-group">
<p onClick={nine_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 9
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_nine} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_nine}
   name='fourth_deviation_nine' id='fourth_deviation_nine' />
    <label htmlFor="fourth_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
<div onClick={nine_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourth_Illum_references_ten">Стойност на осветеността:</label>
    <select  name='fourth_Illum_references_ten'onChange={onChange} 
    >
    <option value="" isselected={fourth_Illum_references_ten === "" ? "Избери" 
    : fourth_Illum_references_ten} hidden="hidden">
    {fourth_Illum_references_ten}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourth_Illum_references_ten===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="fourth_measurement_results_ten">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_measurement_results_ten} 
    name='fourth_measurement_results_ten'  />
    </div>
    <div className="form-group">
    <label htmlFor="fourth_extended_uncertaintyes_ten">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={fourth_extended_uncertaintyes_ten} 
    name='fourth_extended_uncertaintyes_ten'  />
    </div>
    <div className="form-group">
<p onClick={ten_calkDeviation_fourth} className="btn btn-block btn-danger" >
 Отклонение на уреда за т. 10
</p>
   </div>
    <div className="form-group">
    {Fourth_deviation_ten} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
   value={fourth_deviation_ten}
   name='fourth_deviation_ten' id='fourth_deviation_ten' />
    <label htmlFor="fourth_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
<div onClick={ten_clearDeviation} className="btn btn-block">Изчисти</div>
    </div> 
    </div>
    )
}
export default Fourth