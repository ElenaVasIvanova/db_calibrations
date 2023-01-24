import React from 'react'
function FirstItem({calibration}) {
	return (
		<div>
		<br />
		<h2>Металхалогенна лампа - измерване</h2>	    
		<div className="boxes">
		<div className="note">
		<h3>Тип лампа:</h3>
		<p>{
calibration.mhl.lamp_types_one}</p>
		<br />
		<hr />
		<h3>Първа точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.oneIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.one_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.one_extended_uncertaintyes_mhl}<br />
Отклонение на уреда - {calibration.mhl.mhl_deviation_one} %</p>
		<h3>Втора точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.twoIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.two_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.two_extended_uncertaintyes_mhl}<br />
Отклонение на уреда - {calibration.mhl.mhl_deviation_two} %
</p>
		<h3>Трета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.threeIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.three_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.three_extended_uncertaintyes_mhl}
<br />
Отклонение на уреда - {calibration.mhl.mhl_deviation_three} %

</p>
		<h3>Четвърта точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.fourIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.four_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.four_extended_uncertaintyes_mhl}
<br /> Отклонение на уреда - {calibration.mhl.mhl_deviation_four} %</p>
		<h3>Пета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.fiveIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.five_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.five_extended_uncertaintyes_mhl}
<br /> Отклонение на уреда - {calibration.mhl.mhl_deviation_five} %</p>
		</div>
		<div  className="note">
		<h3>Стабилност на лампа:</h3>
		<p>{
calibration.mhl.lamp_stability}</p>
		<br />
		<hr />
		<h3>Шеста точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.sixIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.six_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.six_extended_uncertaintyes_mhl}
<br /> Отклонение на уреда - {calibration.mhl.mhl_deviation_six} %</p>
		<h3>Седма точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.sevenIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.seven_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.seven_extended_uncertaintyes_mhl}
<br /> Отклонение на уреда - {calibration.mhl.mhl_deviation_seven} %</p>
		<h3>Осма точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.eightIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.eight_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.eight_extended_uncertaintyes_mhl}
<br /> Отклонение на уреда - {calibration.mhl.mhl_deviation_eight} %</p>
		<h3>Девета точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.nineIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.nine_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.nine_extended_uncertaintyes_mhl}
<br /> Отклонение на уреда - {calibration.mhl.mhl_deviation_nine} %</p>
		<h3>Деceта точка на калибриране</h3>
		<hr />
		<p className = 'measurment_results'>
		Стойност на осветеността - {
calibration.mhl.tenIllum_references_mhl}<br />
		Резултат от измерването - {
calibration.mhl.ten_measurement_results_mhl}<br />
		Разширена неопределеност - {
calibration.mhl.ten_extended_uncertaintyes_mhl}
<br /> Отклонение на уреда - {calibration.mhl.mhl_deviation_ten} %</p>
		</div>
		</div>
		</div>
		)
}
export default FirstItem