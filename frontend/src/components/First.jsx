import React, { useState, useEffect} from 'react';
import {lamp_types} from '../lamp_types'
import {Illuminance_references} from '../Illuminance_references'
function First({
  onChange,
  mhl_deviation_one, 
  mhl_deviation_two, 
  mhl_deviation_three,
  mhl_deviation_four,
  mhl_deviation_five,
  mhl_deviation_six, 
  mhl_deviation_seven,
  mhl_deviation_eight,
  mhl_deviation_nine,
  mhl_deviation_ten,
  lamp_types_one,
  lamp_stability,
  oneIllum_references_mhl,
  one_measurement_results_mhl,
  one_extended_uncertaintyes_mhl,
  twoIllum_references_mhl,
  two_measurement_results_mhl,
  two_extended_uncertaintyes_mhl,
  threeIllum_references_mhl,
  three_measurement_results_mhl,
  three_extended_uncertaintyes_mhl,
  fourIllum_references_mhl,
  four_measurement_results_mhl,
  four_extended_uncertaintyes_mhl,
  fiveIllum_references_mhl,
  five_measurement_results_mhl,
  five_extended_uncertaintyes_mhl,
  sixIllum_references_mhl,
  six_measurement_results_mhl,
  six_extended_uncertaintyes_mhl,
  sevenIllum_references_mhl,
  seven_measurement_results_mhl,
  seven_extended_uncertaintyes_mhl,
  eightIllum_references_mhl,
  eight_measurement_results_mhl,
  eight_extended_uncertaintyes_mhl,
  nineIllum_references_mhl,
  nine_measurement_results_mhl,
  nine_extended_uncertaintyes_mhl,
  tenIllum_references_mhl,
  ten_measurement_results_mhl,
  ten_extended_uncertaintyes_mhl

}) {

  const [Mhl_deviation_one, setMhl_Deviation_one] = useState(null);
  const [Mhl_deviation_two, setMhl_Deviation_two] = useState(null);
  const [Mhl_deviation_three, setMhl_Deviation_three] = useState(null);
  const [Mhl_deviation_four, setMhl_Deviation_four] = useState(null);
  const [Mhl_deviation_five, setMhl_Deviation_five] = useState(null);
  const [Mhl_deviation_six, setMhl_Deviation_six] = useState(null);
  const [Mhl_deviation_seven, setMhl_Deviation_seven] = useState(null);
  const [Mhl_deviation_eight, setMhl_Deviation_eight] = useState(null);
  const [Mhl_deviation_nine, setMhl_Deviation_nine] = useState(null);
  const [Mhl_deviation_ten, setMhl_Deviation_ten] = useState(null);

  const one_calkDeviation_mhl = () => {
    const Mhl_deviation_one = (((one_measurement_results_mhl-oneIllum_references_mhl)/oneIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_one(Mhl_deviation_one);
    
  }
  const one_clearDeviation_mhl = () => {
    setMhl_Deviation_one('');
  };
  const two_calkDeviation_mhl = () => {
    const Mhl_deviation_two = (((two_measurement_results_mhl-twoIllum_references_mhl)/twoIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_two(Mhl_deviation_two);
  }
  const two_clearDeviation_mhl = () => {
    setMhl_Deviation_two('');
  };
  const three_calkDeviation_mhl = () => {
    const Mhl_deviation_three = (((three_measurement_results_mhl-threeIllum_references_mhl)/threeIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_three(Mhl_deviation_three);
  }
  const three_clearDeviation_mhl = () => {
    setMhl_Deviation_three('');
  };
  const four_calkDeviation_mhl = () => {
    const Mhl_deviation_four = (((four_measurement_results_mhl-fourIllum_references_mhl)/fourIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_four(Mhl_deviation_four);
  }
  const four_clearDeviation_mhl = () => {
    setMhl_Deviation_four('');
  };
  const five_calkDeviation_mhl = () => {
    const Mhl_deviation_five = (((five_measurement_results_mhl-fiveIllum_references_mhl)/fiveIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_five(Mhl_deviation_five);
  }
  const five_clearDeviation_mhl = () => {
    setMhl_Deviation_five('');
  };
  const six_calkDeviation_mhl = () => {
    const Mhl_deviation_six = (((six_measurement_results_mhl-sixIllum_references_mhl)/sixIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_six(Mhl_deviation_six);
  }
  const six_clearDeviation_mhl = () => {
    setMhl_Deviation_six('');
  };
  const seven_calkDeviation_mhl = () => {
    const Mhl_deviation_seven = (((seven_measurement_results_mhl-sevenIllum_references_mhl)/sevenIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_seven(Mhl_deviation_seven);
  }
  const seven_clearDeviation_mhl = () => {
    setMhl_Deviation_seven('');
  };
  const eight_calkDeviation_mhl = () => {
    const Mhl_deviation_eight = (((eight_measurement_results_mhl-eightIllum_references_mhl)/eightIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_eight(Mhl_deviation_eight);
  }
  const eight_clearDeviation_mhl = () => {
    setMhl_Deviation_eight('');
  };
  const nine_calkDeviation_mhl = () => {
    const Mhl_deviation_nine = (((nine_measurement_results_mhl-nineIllum_references_mhl)/nineIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_nine(Mhl_deviation_nine);
  }
  const nine_clearDeviation_mhl = () => {
    setMhl_Deviation_nine('');
  };
  const ten_calkDeviation_mhl = () => {
    const Mhl_deviation_ten = (((ten_measurement_results_mhl-tenIllum_references_mhl)/tenIllum_references_mhl)*100).toFixed(2)
    setMhl_Deviation_ten(Mhl_deviation_ten);
  }
  const ten_clearDeviation_mhl = () => {
    setMhl_Deviation_ten('');
  };

  

  return (
    <div> 
    <div>      
    <h1>Тип лампа</h1>
    {lamp_types.map((lamp_type, id, name) => 
      <div id="check_radio">
      <label key={id} >
      <input 
      name='lamp_types_one'
      value={lamp_type.name}
      checked={lamp_types_one === lamp_type.name}
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
    name='lamp_stability'
    type="radio"
    value='0,1%'
    checked={lamp_stability ==='0,1%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,1%</label> 
    </div>
    <div id="check_radio">
    <label><input
    name='lamp_stability'
    type="radio"
    value='0,5%'
    checked={lamp_stability === '0,5%'}
    onChange={onChange}
    />&nbsp;&nbsp;0,5%</label>
    </div>
    </div>
    <h4>Първа точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="oneIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='oneIllum_references_mhl'onChange={onChange} 
    >
    <option value="" isselected={oneIllum_references_mhl === " " ? "Избери" 
    : oneIllum_references_mhl} hidden="hidden">
    {oneIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option defaultValue={oneIllum_references_mhl===Illuminance_reference} 
       key={id}  > {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>

    <div className="form-group">
    <label htmlFor="one_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={one_measurement_results_mhl} 
    name='one_measurement_results_mhl' id='one_measurement_results_mhl' />
    </div>
    
    <div className="form-group">
    <label htmlFor="one_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={one_extended_uncertaintyes_mhl} 
    name='one_extended_uncertaintyes_mhl' id='one_extended_uncertaintyes_mhl' />
    </div> 
    <div className="form-group">
    <p onClick={one_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 1
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_one} %
    <input  type='number' step="0.01" className='form-control' onChange={onChange}
    value={mhl_deviation_one}
    
    name='mhl_deviation_one' id='mhl_deviation_one' />
    <label htmlFor="mhl_deviation_one">Отклонение на уреда в % за т. 1</label>
    </div> 
    <div onClick={one_clearDeviation_mhl} className="btn btn-block">Изчисти</div>
    </div>
    
    <h4>Втора точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">

    <label htmlFor="twoIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='twoIllum_references_mhl' onChange={onChange} 
    >
    <option  isselected={twoIllum_references_mhl  === " " ? "Избери" 
    : twoIllum_references_mhl} hidden="hidden">
    {twoIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={twoIllum_references_mhl===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="two_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={two_measurement_results_mhl} 
    name='two_measurement_results_mhl' id='two_measurement_results' />
    </div>
    <div className="form-group">
    <label htmlFor="two_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={two_extended_uncertaintyes_mhl} 
    name='two_extended_uncertaintyes_mhl' id='two_extended_uncertaintyes_mhl' />
    </div>

    <div className="form-group">

    <p onClick={two_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 2
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_two} %
    <input  type='number' className='form-control' onChange={onChange}
    value={mhl_deviation_two} step="0.01"
    name='mhl_deviation_two' id='mhl_deviation_two' />
    <label htmlFor="mhl_deviation_two">Отклонение на уреда в % за т. 2</label>
    </div> 
    <div onClick={two_clearDeviation_mhl} className="btn btn-block">Изчисти</div>


    </div>
    <h4>Трета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="threeIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='threeIllum_references_mhl'onChange={onChange} 
    >
    <option value="" isselected={threeIllum_references_mhl === "" ? "Избери" 
    : threeIllum_references_mhl} hidden="hidden">
    {threeIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={threeIllum_references_mhl===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="three_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={three_measurement_results_mhl} 
    name='three_measurement_results_mhl' id='three_measurement_results_mhl' />
    </div>
    <div className="form-group">
    <label htmlFor="three_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={three_extended_uncertaintyes_mhl} 
    name='three_extended_uncertaintyes_mhl' id='three_extended_uncertaintyes_mhl' />
    </div>



    <div className="form-group">
    <p onClick={three_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 3
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_three} %
    <input  type='number' className='form-control' onChange={onChange}
    value={mhl_deviation_three} step="0.01"
    name='mhl_deviation_three' id='mhl_deviation_three' />
    <label htmlFor="mhl_deviation_three">Отклонение на уреда в % за т. 3</label>
    </div> 
    <div onClick={three_clearDeviation_mhl} className="btn btn-block">Изчисти</div>

    </div>
    <h4>Четвърта точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fourIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='fourIllum_references_mhl'onChange={onChange} 
    >
    <option value="" isselected={fourIllum_references_mhl === "" ? "Избери" 
    : fourIllum_references_mhl} hidden="hidden">
    {fourIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fourIllum_references_mhl===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="four_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={four_measurement_results_mhl} 
    name='four_measurement_results_mhl'  />
    </div>
    <div className="form-group">
    <label htmlFor="four_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={four_extended_uncertaintyes_mhl} 
    name='four_extended_uncertaintyes_mhl'  />
    </div>




    <div className="form-group">
    <p onClick={four_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 4
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_four} %
    <input  type='number' className='form-control' onChange={onChange}
    value={mhl_deviation_four} step="0.01"
    name='mhl_deviation_four' id='mhl_deviation_four' />
    <label htmlFor="mhl_deviation_four">Отклонение на уреда в % за т. 4</label>
    </div> 
    <div onClick={four_clearDeviation_mhl} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Пета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="fiveIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='fiveIllum_references_mhl'onChange={onChange} 
    >
    <option value="" isselected={fiveIllum_references_mhl === "" ? "Избери" 
    : fiveIllum_references_mhl} hidden="hidden">
    {fiveIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={fiveIllum_references_mhl===Illuminance_reference}  key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="five_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={five_measurement_results_mhl} 
    name='five_measurement_results_mhl'  />
    </div>
    <div className="form-group">
    <label htmlFor="five_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={five_extended_uncertaintyes_mhl} 
    name='five_extended_uncertaintyes_mhl'  />
    </div>

    <div className="form-group">
    <p onClick={five_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 5
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_five} %
    <input  type='number' className='form-control' 
    value={mhl_deviation_five} 
    step="0.01" onChange={onChange}
    name='mhl_deviation_five' id='mhl_deviation_five' />
    <label htmlFor="mhl_deviation_five">Отклонение на уреда в % за т. 5</label>
    </div> 
    <div onClick={five_clearDeviation_mhl} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Шеста точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sixIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='sixIllum_references_mhl'onChange={onChange} 
    >
    <option value="" isselected={sixIllum_references_mhl === "" ? "Избери" 
    : sixIllum_references_mhl} hidden="hidden">
    {sixIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sixIllum_references_mhl===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="six_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={six_measurement_results_mhl} 
    name='six_measurement_results_mhl'  />
    </div>
    <div className="form-group">
    <label htmlFor="six_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={six_extended_uncertaintyes_mhl} 
    name='six_extended_uncertaintyes_mhl'  />
    </div>

    <div className="form-group">
    <p onClick={six_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 6
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_six} %
    <input  type='number' className='form-control' onChange={onChange}
    value={mhl_deviation_six} step="0.01"
    name='mhl_deviation_six' id='mhl_deviation_six' />
    <label htmlFor="mhl_deviation_six">Отклонение на уреда в % за т. 6</label>
    </div> 
    <div onClick={six_clearDeviation_mhl} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Седма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="sevenIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='sevenIllum_references_mhl'onChange={onChange} 
    >
    <option value="" isselected={sevenIllum_references_mhl === "" ? "Избери" 
    : sevenIllum_references_mhl} hidden="hidden">
    {sevenIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={sevenIllum_references_mhl===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="seven_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seven_measurement_results_mhl} 
    name='seven_measurement_results_mhl'  />
    </div>
    <div className="form-group">
    <label htmlFor="seven_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={seven_extended_uncertaintyes_mhl} 
    name='seven_extended_uncertaintyes_mhl'  />
    </div>


    <div className="form-group">
    <p onClick={seven_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 7
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_seven} %
    <input  type='number' className='form-control' onChange={onChange}
    value={mhl_deviation_seven} step="0.01"
    name='mhl_deviation_seven' id='mhl_deviation_seven' />
    <label htmlFor="mhl_deviation_seven">Отклонение на уреда в % за т. 7</label>
    </div> 
    <div onClick={seven_clearDeviation_mhl} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Осма точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="eightIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='eightIllum_references_mhl'onChange={onChange} 
    >
    <option value="" isselected={eightIllum_references_mhl === "" ? "Избери" 
    : eightIllum_references_mhl} hidden="hidden">
    {eightIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={eightIllum_references_mhl===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="eight_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eight_measurement_results_mhl} 
    name='eight_measurement_results_mhl'  />
    </div>
    <div className="form-group">
    <label htmlFor="eight_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={eight_extended_uncertaintyes_mhl} 
    name='eight_extended_uncertaintyes_mhl'  />
    </div>

    <div className="form-group">
    <p onClick={eight_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 8
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_eight} %
    <input  type='number' className='form-control' onChange={onChange}
    value={mhl_deviation_eight} step="0.01"
    name='mhl_deviation_eight' id='mhl_deviation_eight' />
    <label htmlFor="mhl_deviation_eight">Отклонение на уреда в % за т. 8</label>
    </div> 
    <div onClick={eight_clearDeviation_mhl} className="btn btn-block">Изчисти</div>




    </div> 
    <h4>Девета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="nineIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='nineIllum_references_mhl'onChange={onChange} 
    >
    <option value="" isselected={nineIllum_references_mhl === "" ? "Избери" 
    : nineIllum_references_mhl} hidden="hidden">
    {nineIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={nineIllum_references_mhl===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="nine_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={nine_measurement_results_mhl} 
    name='nine_measurement_results_mhl'  />
    </div>
    <div className="form-group">
    <label htmlFor="nine_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={nine_extended_uncertaintyes_mhl} 
    name='nine_extended_uncertaintyes_mhl'  />
    </div>



    <div className="form-group">
    <p onClick={nine_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 9
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_nine} %
    <input  type='number' className='form-control' onChange={onChange}
    value={mhl_deviation_nine} step="0.01" 
    name='mhl_deviation_nine' id='mhl_deviation_nine' />
    <label htmlFor="mhl_deviation_nine">Отклонение на уреда в % за т. 9</label>
    </div> 
    <div onClick={nine_clearDeviation_mhl} className="btn btn-block">Изчисти</div>
    </div> 
    <h4>Десета точка на калибриране</h4>
    <hr />
    <div className="results">
    <div className="form-group">
    <label htmlFor="tenIllum_references_mhl">Стойност на осветеността:</label>
    <select  name='tenIllum_references_mhl'onChange={onChange} 
    >
    <option value="" isselected={tenIllum_references_mhl === "" ? "Избери" 
    : tenIllum_references_mhl} hidden="hidden">
    {tenIllum_references_mhl}
    </option> 
    {Illuminance_references.map((Illuminance_reference, id, name) => {
     return (
       <option selected={tenIllum_references_mhl===Illuminance_reference}
       key={id}  value={Illuminance_reference.name}> {Illuminance_reference.name} </option>
       )
   })}
    </select>
    </div>
    <div className="form-group">
    <label htmlFor="ten_measurement_results_mhl">Резултат от измерването:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ten_measurement_results_mhl} 
    name='ten_measurement_results_mhl'  />
    </div>
    <div className="form-group">
    <label htmlFor="ten_extended_uncertaintyes_mhl">Разширена неопределеност:</label>
    <input  type='number' step="0.0001" min="0" max="10000" className='form-control' onChange={onChange}
    value={ten_extended_uncertaintyes_mhl} 
    name='ten_extended_uncertaintyes_mhl'  />
    </div>

    <div className="form-group">
    <p onClick={ten_calkDeviation_mhl} className="btn btn-block btn-danger" >
    Отклонение на уреда за т. 10
    </p>
    </div>

    <div className="form-group">
    {Mhl_deviation_ten} %
    <input  type='number' className='form-control' onChange={onChange}
    value={mhl_deviation_ten} step="0.01"
    name='mhl_deviation_ten' id='mhl_deviation_ten' />
    <label htmlFor="mhl_deviation_ten">Отклонение на уреда в % за т. 10</label>
    </div> 
    <div onClick={ten_clearDeviation_mhl} className="btn btn-block">Изчисти</div>
    </div>
    </div> 
    )
}
export default First