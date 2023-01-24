import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import {
	createCalibration,
	reset,
} from "../features/calibrations/calibrationSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { lamp_types } from "../lamp_types";
//import { Illuminance_references } from "../Illuminance_references";
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import Fifth from '../components/Fifth'
import Sixth from '../components/Sixth'
import Seventh from '../components/Seventh'
import Eighth from '../components/Eighth'
import Ninth from '../components/Ninth'
import Tenth from '../components/Tenth'
import Eleventh from '../components/Eleventh'
import Twelfth from '../components/Twelfth'
function NewCalibration() {
	const { user } = useSelector((state) => state.auth);
	const { isSuccess, isLoading, message, isError } = useSelector(
		(state) => state.calibration
		);
	const [name] = useState(user.name);
	const [email] = useState(user.email);
	const [showInsertOne, setshowInsertOne] = useState("");
	const [showInsertTwo, setshowInsertTwo] = useState("");
	const [showInsertThree, setshowInsertThree] = useState("");
	const [showInsertFour, setshowInsertFour] = useState("");
	const [showInsertFive, setshowInsertFive] = useState("");
	const [showInsertSix, setshowInsertSix] = useState("");
	const [showInsertSeven, setshowInsertSeven] = useState("");
	const [showInsertEighth, setshowInsertEighth] = useState("");
	const [showInsertNine, setshowInsertNine] = useState("");
	const [showInsertTen, setshowInsertTen] = useState("");
	const [showInsertEleven, setshowInsertEleven] = useState("");
	const [showInsertTwelfth, setshowInsertTwelfth] = useState("");
	const onShowInsertOne = () => {
		setshowInsertOne(!showInsertOne) 
	};
	const onShowInsertTwo = () => {
		setshowInsertTwo(!showInsertTwo) 
	};
	const onShowInsertThree = () => {
		setshowInsertThree(!showInsertThree) 
	};
	const onShowInsertFour = () => {
		setshowInsertFour(!showInsertFour) 
	};
	const onShowInsertFive = () => {
		setshowInsertFive(!showInsertFive) 
	};
	const onShowInsertSix = () => {
		setshowInsertSix(!showInsertSix) 
	};
	const onShowInsertSeven = () => {
		setshowInsertSeven(!showInsertSeven) 
	};
	const onShowInsertEighth = () => {
		setshowInsertEighth(!showInsertEighth) 
	};
	const onShowInsertNine = () => {
		setshowInsertNine(!showInsertNine) 
	};
	const onShowInsertTen = () => {
		setshowInsertTen(!showInsertTen) 
	};
	const onShowInsertEleven = () => {
		setshowInsertEleven(!showInsertEleven) 
	};
	const onShowInsertTwelfth = () => {
		setshowInsertTwelfth(!showInsertTwelfth) 
	};
	const [NewData, setNewData] = useState({
		
		device: "",
		manufacturer: "",
		type_model: "",
		identification: "",
		client: "",
		application_num: "",
		town_village: "",
		quarter: "",
		street: "",
		number: "",
		block: "",
		еntrance: "",
		floor: "",
		apartment: "",
		cer_town_village: "",
		cer_quarter: "",
		cer_street: "",
		cer_number: "",
		cer_block: "",
		cer_еntrance: "",
		cer_floor: "",
		cer_apartment: "",
		calibration_date: "",
		number_pages: "",
		performed: "",
		num_calibration_certificate: "",
		data_calibration_certificate: "",
		calibration_method: "",
		logos: "",
		metrological_traceabilityes: "",
		air_temperature: "",
		air_temperature_un: "",
		relative_humidity: "",
		relative_humidity_un: "",
		primary_list: "",
		incoming_num: "",
		price: "",
		invoice: "",
		A60: {
			lamp_types_four: '', 
			lamp_stabilityes_four: '',
			fourth_deviation_one:  '',
			fourth_deviation_two:  '',
			fourth_deviation_three:  '',
			fourth_deviation_four:  '',
			fourth_deviation_five:  '',
			fourth_deviation_six:  '',
			fourth_deviation_seven:  '',
			fourth_deviation_eight:  '',
			fourth_deviation_nine:  '',
			fourth_deviation_ten:  '',
			fourth_measurement_results_one: '', 
			fourth_measurement_results_two: '', 
			fourth_measurement_results_three: '', 
			fourth_measurement_results_four: '', 
			fourth_measurement_results_five: '', 
			fourth_measurement_results_six: '', 
			fourth_measurement_results_seven: '', 
			fourth_measurement_results_eight: '', 
			fourth_measurement_results_nine: '', 
			fourth_measurement_results_ten: '', 
			fourth_extended_uncertaintyes_one: '', 
			fourth_extended_uncertaintyes_two: '', 
			fourth_extended_uncertaintyes_three: '', 
			fourth_extended_uncertaintyes_four: '', 
			fourth_extended_uncertaintyes_five: '', 
			fourth_extended_uncertaintyes_six: '', 
			fourth_extended_uncertaintyes_seven: '', 
			fourth_extended_uncertaintyes_eight: '', 
			fourth_extended_uncertaintyes_nine: '', 
			fourth_extended_uncertaintyes_ten: '', 
			fourth_Illum_references_one: '', 
			fourth_Illum_references_two: '', 
			fourth_Illum_references_three: '', 
			fourth_Illum_references_four: '', 
			fourth_Illum_references_five: '', 
			fourth_Illum_references_six: '', 
			fourth_Illum_references_seven: '', 
			fourth_Illum_references_eight: '', 
			fourth_Illum_references_nine: '', 
			fourth_Illum_references_ten: '',
		},
		Star: {
			lamp_types_six: '',
			lamp_stabilityes_six: '',
			sixth_deviation_one:  '',
			sixth_deviation_two:  '',
			sixth_deviation_three:  '',
			sixth_deviation_four:  '',
			sixth_deviation_five:  '',
			sixth_deviation_six:  '',
			sixth_deviation_seven:  '',
			sixth_deviation_eight:  '',
			sixth_deviation_nine:  '',
			sixth_deviation_ten:  '',
			one_measurement_results_sixth: '',
			two_measurement_results_sixth: '',
			three_measurement_results_sixth: '',
			four_measurement_results_sixth: '',
			five_measurement_results_sixth: '',
			six_measurement_results_sixth: '',
			seven_measurement_results_sixth: '',
			eight_measurement_results_sixth: '',
			nine_measurement_results_sixth: '',
			ten_measurement_results_sixth: '',
			one_extended_uncertaintyes_sixth: '',
			two_extended_uncertaintyes_sixth: '',
			three_extended_uncertaintyes_sixth: '',
			four_extended_uncertaintyes_sixth: '',
			five_extended_uncertaintyes_sixth: '',
			six_extended_uncertaintyes_sixth: '',
			seven_extended_uncertaintyes_sixth: '',
			eight_extended_uncertaintyes_sixth: '',
			nine_extended_uncertaintyes_sixth: '',
			ten_extended_uncertaintyes_sixth: '',
			oneIllum_references_sixth: '',
			twoIllum_references_sixth: '',
			threeIllum_references_sixth: '',
			fourIllum_references_sixth: '',
			fiveIllum_references_sixth: '',
			sixIllum_references_sixth: '',
			sevenIllum_references_sixth: '',
			eightIllum_references_sixth: '',
			nineIllum_references_sixth: '',
			tenIllum_references_sixth: '',
		},
		VT_1864: {
			lamp_types_seven: '',
			lamp_stabilityes_seven: '',
			seventh_deviation_one:  '',
			seventh_deviation_two:  '',
			seventh_deviation_three:  '',
			seventh_deviation_four:  '',
			seventh_deviation_five:  '',
			seventh_deviation_six:  '',
			seventh_deviation_seven:  '',
			seventh_deviation_eight:  '',
			seventh_deviation_nine:  '',
			seventh_deviation_ten:  '',
			seventh_measurement_results_one: '',
			seventh_measurement_results_two: '',
			seventh_measurement_results_three: '',
			seventh_measurement_results_four: '',
			seventh_measurement_results_five: '',
			seventh_measurement_results_six: '',
			seventh_measurement_results_seven: '',
			seventh_measurement_results_eight: '',
			seventh_measurement_results_nine: '',
			seventh_measurement_results_ten: '',
			seventh_extended_uncertaintyes_one: '',
			seventh_extended_uncertaintyes_two: '',
			seventh_extended_uncertaintyes_three: '',
			seventh_extended_uncertaintyes_four: '',
			seventh_extended_uncertaintyes_five: '',
			seventh_extended_uncertaintyes_six: '',
			seventh_extended_uncertaintyes_seven: '',
			seventh_extended_uncertaintyes_eight: '',
			seventh_extended_uncertaintyes_nine: '',
			seventh_extended_uncertaintyes_ten: '',
			seventh_Illum_references_one: '',
			seventh_Illum_references_two: '',
			seventh_Illum_references_three: '',
			seventh_Illum_references_four: '',
			seventh_Illum_references_five: '',
			seventh_Illum_references_six: '',
			seventh_Illum_references_seven: '',
			seventh_Illum_references_eight: '',
			seventh_Illum_references_nine: '',
			seventh_Illum_references_ten: '',
		},
		Viva_cool: {
			lamp_types_eight: '',
			lamp_stabilityes_eight: '',
			eighth_deviation_one:  '',
			eighth_deviation_two:  '',
			eighth_deviation_three:  '',
			eighth_deviation_four:  '',
			eighth_deviation_five:  '',
			eighth_deviation_six:  '',
			eighth_deviation_seven:  '',
			eighth_deviation_eight:  '',
			eighth_deviation_nine:  '',
			eighth_deviation_ten:  '',
			eighth_measurement_results_one: '',
			eighth_measurement_results_two: '',
			eighth_measurement_results_three: '',
			eighth_measurement_results_four: '',
			eighth_measurement_results_five: '',
			eighth_measurement_results_six: '',
			eighth_measurement_results_seven: '',
			eighth_measurement_results_eight: '',
			eighth_measurement_results_nine: '',
			eighth_measurement_results_ten: '',
			eighth_extended_uncertaintyes_one: '',
			eighth_extended_uncertaintyes_two: '',
			eighth_extended_uncertaintyes_three: '',
			eighth_extended_uncertaintyes_four: '',
			eighth_extended_uncertaintyes_five: '',
			eighth_extended_uncertaintyes_six: '',
			eighth_extended_uncertaintyes_seven: '',
			eighth_extended_uncertaintyes_eight: '',
			eighth_extended_uncertaintyes_nine: '',
			eighth_extended_uncertaintyes_ten: '',
			eighth_Illum_references_one: '',
			eighth_Illum_references_two: '',
			eighth_Illum_references_three: '',
			eighth_Illum_references_four: '',
			eighth_Illum_references_five: '',
			eighth_Illum_references_six: '',
			eighth_Illum_references_seven: '',
			eighth_Illum_references_eight: '',
			eighth_Illum_references_nine: '',
			eighth_Illum_references_ten: '',
		},
		Viva_warm: {
			lamp_types_nine: '',
			lamp_stabilityes_nine: '',
			ninth_deviation_one:  '',
			ninth_deviation_two:  '',
			ninth_deviation_three:  '',
			ninth_deviation_four:  '',
			ninth_deviation_five:  '',
			ninth_deviation_six:  '',
			ninth_deviation_seven:  '',
			ninth_deviation_eight:  '',
			ninth_deviation_nine:  '',
			ninth_deviation_ten:  '',
			ninth_measurement_results_one: '',
			ninth_measurement_results_two: '',
			ninth_measurement_results_three: '',
			ninth_measurement_results_four: '',
			ninth_measurement_results_five: '',
			ninth_measurement_results_six: '',
			ninth_measurement_results_seven: '',
			ninth_measurement_results_eight: '',
			ninth_measurement_results_nine: '',
			ninth_measurement_results_ten: '',
			ninth_extended_uncertaintyes_one: '',
			ninth_extended_uncertaintyes_two: '',
			ninth_extended_uncertaintyes_three: '',
			ninth_extended_uncertaintyes_four: '',
			ninth_extended_uncertaintyes_five: '',
			ninth_extended_uncertaintyes_six: '',
			ninth_extended_uncertaintyes_seven: '',
			ninth_extended_uncertaintyes_eight: '',
			ninth_extended_uncertaintyes_nine: '',
			ninth_extended_uncertaintyes_ten: '',
			ninth_Illum_references_one: '',
			ninth_Illum_references_two: '',
			ninth_Illum_references_three: '',
			ninth_Illum_references_four: '',
			ninth_Illum_references_five: '',
			ninth_Illum_references_six: '',
			ninth_Illum_references_seven: '',
			ninth_Illum_references_eight: '',
			ninth_Illum_references_nine: '',
			ninth_Illum_references_ten: '',
		}, 
		OSRAM_6500: { 
			lamp_types_ten : '',
			lamp_stabilityes_ten: '',
			tenth_deviation_one:  '',
			tenth_deviation_two:  '',
			tenth_deviation_three:  '',
			tenth_deviation_four:  '',
			tenth_deviation_five:  '',
			tenth_deviation_six:  '',
			tenth_deviation_seven:  '',
			tenth_deviation_eight:  '',
			tenth_deviation_nine:  '',
			tenth_deviation_ten:  '',
			tenth_measurement_results_one: '',
			tenth_measurement_results_two: '',
			tenth_measurement_results_three: '',
			tenth_measurement_results_four: '',
			tenth_measurement_results_five: '',
			tenth_measurement_results_six: '',
			tenth_measurement_results_seven: '',
			tenth_measurement_results_eight: '',
			tenth_measurement_results_nine: '',
			tenth_measurement_results_ten: '',
			tenth_extended_uncertaintyes_one: '',
			tenth_extended_uncertaintyes_two: '',
			tenth_extended_uncertaintyes_three: '',
			tenth_extended_uncertaintyes_four: '',
			tenth_extended_uncertaintyes_five: '',
			tenth_extended_uncertaintyes_six: '',
			tenth_extended_uncertaintyes_seven: '',
			tenth_extended_uncertaintyes_eight: '',
			tenth_extended_uncertaintyes_nine: '',
			tenth_extended_uncertaintyes_ten: '',
			tenth_Illum_references_one: '',
			tenth_Illum_references_two: '',
			tenth_Illum_references_three: '',
			tenth_Illum_references_four: '',
			tenth_Illum_references_five: '',
			tenth_Illum_references_six: '',
			tenth_Illum_references_seven: '',
			tenth_Illum_references_eight: '',
			tenth_Illum_references_nine: '',
			tenth_Illum_references_ten: '',
		},
		mhl: { 
			mhl_deviation_one: '', 
			mhl_deviation_two: '', 
			mhl_deviation_three: '',
			mhl_deviation_four: '',
			mhl_deviation_five: '',
			mhl_deviation_six: '', 
			mhl_deviation_seven: '',
			mhl_deviation_eight: '',
			mhl_deviation_nine: '',
			mhl_deviation_ten: '',
			oneIllum_references_mhl: '',
			one_measurement_results_mhl: '',
			one_extended_uncertaintyes_mhl: '',
			twoIllum_references_mhl: '',
			two_measurement_results_mhl: '',
			two_extended_uncertaintyes_mhl: '',
			threeIllum_references_mhl: '',
			three_measurement_results_mhl: '',
			three_extended_uncertaintyes_mhl: '',
			fourIllum_references_mhl: '',
			four_measurement_results_mhl: '',
			four_extended_uncertaintyes_mhl: '',
			fiveIllum_references_mhl: '',
			five_measurement_results_mhl: '',
			five_extended_uncertaintyes_mhl: '',
			sixIllum_references_mhl: '',
			six_measurement_results_mhl: '',
			six_extended_uncertaintyes_mhl: '',
			sevenIllum_references_mhl: '',
			seven_measurement_results_mhl: '',
			seven_extended_uncertaintyes_mhl: '',
			eightIllum_references_mhl: '',
			eight_measurement_results_mhl: '',
			eight_extended_uncertaintyes_mhl: '',
			nineIllum_references_mhl: '',
			nine_measurement_results_mhl: '',
			nine_extended_uncertaintyes_mhl: '',
			tenIllum_references_mhl: '',
			ten_measurement_results_mhl: '',
			ten_extended_uncertaintyes_mhl: '',
			lamp_types_one: "",
			lamp_stability: "",
		},
		lng: {
			lng_deviation_one:  '',
			lng_deviation_two:  '',
			lng_deviation_three:  '',
			lng_deviation_four:  '',
			lng_deviation_five:  '',
			lng_deviation_six:  '',
			lng_deviation_seven:  '',
			lng_deviation_eight:  '',
			lng_deviation_nine:  '',
			lng_deviation_ten:  '',
			lamp_types_two:"",
			lamp_stabilityes_two:"",
			electricity_two:"",
			voltage_two:"",
			sec_measurement_results_one_lng:"",
			sec_extended_uncertaintyes_one_lng:"",
			sec_Illum_references_one_lng:"",
			sec_measurement_results_two_lng:"",
			sec_extended_uncertaintyes_two_lng:"",
			sec_Illum_references_two_lng:"",
			sec_measurement_results_three_lng:"",
			sec_extended_uncertaintyes_three_lng:"",
			sec_Illum_references_three_lng:"",
			sec_measurement_results_four_lng:"",
			sec_extended_uncertaintyes_four_lng:"",
			sec_Illum_references_four_lng:"",
			sec_measurement_results_five_lng:"",
			sec_extended_uncertaintyes_five_lng:"",
			sec_Illum_references_five_lng:"",
			sec_measurement_results_six_lng:"",
			sec_extended_uncertaintyes_six_lng:"",
			sec_Illum_references_six_lng:"",
			sec_measurement_results_seven_lng:"",
			sec_extended_uncertaintyes_seven_lng:"",
			sec_Illum_references_seven_lng:"",
			sec_measurement_results_eight_lng:"",
			sec_extended_uncertaintyes_eight_lng:"",
			sec_Illum_references_eight_lng:"",
			sec_measurement_results_nine_lng:"",
			sec_extended_uncertaintyes_nine_lng:"",
			sec_Illum_references_nine_lng:"",
			sec_measurement_results_ten_lng:"",
			sec_extended_uncertaintyes_ten_lng:"",
			sec_Illum_references_ten_lng:"",
		},
		Ll_philips: {
			lamp_types_three:"", 
			lamp_stabilityes_three:"",
			third_deviation_one:  '',
			third_deviation_two:  '',
			third_deviation_three:  '',
			third_deviation_four:  '',
			third_deviation_five:  '',
			third_deviation_six:  '',
			third_deviation_seven:  '',
			third_deviation_eight:  '',
			third_deviation_nine:  '',
			third_deviation_ten:  '',
			third_measurement_results_one:"",
			third_measurement_results_two:"",
			third_measurement_results_three:"",
			third_measurement_results_four:"",
			third_measurement_results_five:"",
			third_measurement_results_six:"",
			third_measurement_results_seven:"",
			third_measurement_results_eight:"",
			third_measurement_results_nine:"",
			third_measurement_results_ten:"",
			third_extended_uncertaintyes_one:"",
			third_extended_uncertaintyes_two:"",
			third_extended_uncertaintyes_three:"",
			third_extended_uncertaintyes_four:"",
			third_extended_uncertaintyes_five:"",
			third_extended_uncertaintyes_six:"",
			third_extended_uncertaintyes_seven:"",
			third_extended_uncertaintyes_eight:"",
			third_extended_uncertaintyes_nine:"",
			third_extended_uncertaintyes_ten:"",
			third_Illum_references_one:"",
			third_Illum_references_two:"",
			third_Illum_references_three:"",
			third_Illum_references_four:"",
			third_Illum_references_five:"",
			third_Illum_references_six:"",
			third_Illum_references_seven:"",
			third_Illum_references_eight:"",
			third_Illum_references_nine:"",
			third_Illum_references_ten:"",
		}, 
		Ultra:{
			lamp_types_five: '', 
			lamp_stabilityes_five: '',
			fifth_deviation_one:  '',
			fifth_deviation_two:  '',
			fifth_deviation_three:  '',
			fifth_deviation_four:  '',
			fifth_deviation_five:  '',
			fifth_deviation_six:  '',
			fifth_deviation_seven:  '',
			fifth_deviation_eight:  '',
			fifth_deviation_nine:  '',
			fifth_deviation_ten:  '',
			fifth_measurement_results_one: '', 
			fifth_measurement_results_two: '', 
			fifth_measurement_results_three: '', 
			fifth_measurement_results_four: '', 
			fifth_measurement_results_five: '', 
			fifth_measurement_results_six: '', 
			fifth_measurement_results_seven: '', 
			fifth_measurement_results_eight: '', 
			fifth_measurement_results_nine: '', 
			fifth_measurement_results_ten: '', 
			fifth_extended_uncertaintyes_one: '', 
			fifth_extended_uncertaintyes_two: '', 
			fifth_extended_uncertaintyes_three: '', 
			fifth_extended_uncertaintyes_four: '', 
			fifth_extended_uncertaintyes_five: '', 
			fifth_extended_uncertaintyes_six: '', 
			fifth_extended_uncertaintyes_seven: '', 
			fifth_extended_uncertaintyes_eight: '', 
			fifth_extended_uncertaintyes_nine: '', 
			fifth_extended_uncertaintyes_ten: '', 
			fifth_Illum_references_one: '', 
			fifth_Illum_references_two: '', 
			fifth_Illum_references_three: '', 
			fifth_Illum_references_four: '', 
			fifth_Illum_references_five: '', 
			fifth_Illum_references_six: '', 
			fifth_Illum_references_seven: '', 
			fifth_Illum_references_eight: '', 
			fifth_Illum_references_nine: '', 
			fifth_Illum_references_ten: '',
		},
		Ll_6500: {
			lamp_types_eleven : '',
			lamp_stabilityes_eleven: '',
			eleventh_deviation_one:  '',
			eleventh_deviation_two:  '',
			eleventh_deviation_three:  '',
			eleventh_deviation_four:  '',
			eleventh_deviation_five:  '',
			eleventh_deviation_six:  '',
			eleventh_deviation_seven:  '',
			eleventh_deviation_eight:  '',
			eleventh_deviation_nine:  '',
			eleventh_deviation_ten:  '',
			eleventh_measurement_results_one: '',
			eleventh_measurement_results_two: '',
			eleventh_measurement_results_three: '',
			eleventh_measurement_results_four: '',
			eleventh_measurement_results_five: '',
			eleventh_measurement_results_six: '',
			eleventh_measurement_results_seven: '',
			eleventh_measurement_results_eight: '',
			eleventh_measurement_results_nine: '',
			eleventh_measurement_results_ten: '',
			eleventh_extended_uncertaintyes_one: '',
			eleventh_extended_uncertaintyes_two: '',
			eleventh_extended_uncertaintyes_three: '',
			eleventh_extended_uncertaintyes_four: '',
			eleventh_extended_uncertaintyes_five: '',
			eleventh_extended_uncertaintyes_six: '',
			eleventh_extended_uncertaintyes_seven: '',
			eleventh_extended_uncertaintyes_eight: '',
			eleventh_extended_uncertaintyes_nine: '',
			eleventh_extended_uncertaintyes_ten: '',
			eleventh_Illum_references_one: '',
			eleventh_Illum_references_two: '',
			eleventh_Illum_references_three: '',
			eleventh_Illum_references_four: '',
			eleventh_Illum_references_five: '',
			eleventh_Illum_references_six: '',
			eleventh_Illum_references_seven: '',
			eleventh_Illum_references_eight: '',
			eleventh_Illum_references_nine: '',
			eleventh_Illum_references_ten: '',
		},
		lng_1: {
			onChange: '',
			lamp_types_twelve : '',
			lamp_stabilityes_twelve: '',
			twelfth_deviation_one:  '',
			twelfth_deviation_two:  '',
			twelfth_deviation_three:  '',
			twelfth_deviation_four:  '',
			twelfth_deviation_five:  '',
			twelfth_deviation_six:  '',
			twelfth_deviation_seven:  '',
			twelfth_deviation_eight:  '',
			twelfth_deviation_nine:  '',
			twelfth_deviation_ten:  '',
			twelfth_measurement_results_one: '',
			twelfth_measurement_results_two: '',
			twelfth_measurement_results_three: '',
			twelfth_measurement_results_four: '',
			twelfth_measurement_results_five: '',
			twelfth_measurement_results_six: '',
			twelfth_measurement_results_seven: '',
			twelfth_measurement_results_eight: '',
			twelfth_measurement_results_nine: '',
			twelfth_measurement_results_ten: '',
			twelfth_extended_uncertaintyes_one: '',
			twelfth_extended_uncertaintyes_two: '',
			twelfth_extended_uncertaintyes_three: '',
			twelfth_extended_uncertaintyes_four: '',
			twelfth_extended_uncertaintyes_five: '',
			twelfth_extended_uncertaintyes_six: '',
			twelfth_extended_uncertaintyes_seven: '',
			twelfth_extended_uncertaintyes_eight: '',
			twelfth_extended_uncertaintyes_nine: '',
			twelfth_extended_uncertaintyes_ten: '',
			twelfth_Illum_references_one: '',
			twelfth_Illum_references_two: '',
			twelfth_Illum_references_three: '',
			twelfth_Illum_references_four: '',
			twelfth_Illum_references_five: '',
			twelfth_Illum_references_six: '',
			twelfth_Illum_references_seven: '',
			twelfth_Illum_references_eight: '',
			twelfth_Illum_references_nine: '',
			twelfth_Illum_references_ten: '',
		},
	});
const {
	device,
	manufacturer,
	type_model,
	identification,
	client,
	application_num,
	town_village,
	quarter,
	street,
	number,
	block,
	еntrance,
	floor,
	apartment,
	cer_town_village,
	cer_quarter,
	cer_street,
	cer_number,
	cer_block,
	cer_еntrance,
	cer_floor,
	cer_apartment,
	calibration_date,
	number_pages,
	performed,
	num_calibration_certificate,
	data_calibration_certificate,
	calibration_method,
	logos,
	metrological_traceabilityes,
	air_temperature,
	air_temperature_un,
	relative_humidity,
	relative_humidity_un,
	primary_list,
	incoming_num,
	price,
	invoice,
	lng_1: {
		lamp_types_twelve ,
		lamp_stabilityes_twelve,
		twelfth_deviation_one, 
		twelfth_deviation_two, 
		twelfth_deviation_three,
		twelfth_deviation_four,
		twelfth_deviation_five,
		twelfth_deviation_six, 
		twelfth_deviation_seven,
		twelfth_deviation_eight,
		twelfth_deviation_nine,
		twelfth_deviation_ten,
		twelfth_measurement_results_one,
		twelfth_measurement_results_two,
		twelfth_measurement_results_three,
		twelfth_measurement_results_four,
		twelfth_measurement_results_five,
		twelfth_measurement_results_six,
		twelfth_measurement_results_seven,
		twelfth_measurement_results_eight,
		twelfth_measurement_results_nine,
		twelfth_measurement_results_ten,
		twelfth_extended_uncertaintyes_one,
		twelfth_extended_uncertaintyes_two,
		twelfth_extended_uncertaintyes_three,
		twelfth_extended_uncertaintyes_four,
		twelfth_extended_uncertaintyes_five,
		twelfth_extended_uncertaintyes_six,
		twelfth_extended_uncertaintyes_seven,
		twelfth_extended_uncertaintyes_eight,
		twelfth_extended_uncertaintyes_nine,
		twelfth_extended_uncertaintyes_ten,
		twelfth_Illum_references_one,
		twelfth_Illum_references_two,
		twelfth_Illum_references_three,
		twelfth_Illum_references_four,
		twelfth_Illum_references_five,
		twelfth_Illum_references_six,
		twelfth_Illum_references_seven,
		twelfth_Illum_references_eight,
		twelfth_Illum_references_nine,
		twelfth_Illum_references_ten,
	},
	Ll_6500: {lamp_types_eleven ,
		lamp_stabilityes_eleven,
		eleventh_deviation_one, 
		eleventh_deviation_two, 
		eleventh_deviation_three,
		eleventh_deviation_four,
		eleventh_deviation_five,
		eleventh_deviation_six, 
		eleventh_deviation_seven,
		eleventh_deviation_eight,
		eleventh_deviation_nine,
		eleventh_deviation_ten,
		eleventh_measurement_results_one,
		eleventh_measurement_results_two,
		eleventh_measurement_results_three,
		eleventh_measurement_results_four,
		eleventh_measurement_results_five,
		eleventh_measurement_results_six,
		eleventh_measurement_results_seven,
		eleventh_measurement_results_eight,
		eleventh_measurement_results_nine,
		eleventh_measurement_results_ten,
		eleventh_extended_uncertaintyes_one,
		eleventh_extended_uncertaintyes_two,
		eleventh_extended_uncertaintyes_three,
		eleventh_extended_uncertaintyes_four,
		eleventh_extended_uncertaintyes_five,
		eleventh_extended_uncertaintyes_six,
		eleventh_extended_uncertaintyes_seven,
		eleventh_extended_uncertaintyes_eight,
		eleventh_extended_uncertaintyes_nine,
		eleventh_extended_uncertaintyes_ten,
		eleventh_Illum_references_one,
		eleventh_Illum_references_two,
		eleventh_Illum_references_three,
		eleventh_Illum_references_four,
		eleventh_Illum_references_five,
		eleventh_Illum_references_six,
		eleventh_Illum_references_seven,
		eleventh_Illum_references_eight,
		eleventh_Illum_references_nine,
		eleventh_Illum_references_ten,
	},
	mhl: { 
		lamp_types_one,
		lamp_stability,
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
		ten_extended_uncertaintyes_mhl,
	},
	lng: {
		lamp_types_two,      
		lamp_stabilityes_two,
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
	},
	Ll_philips: {
		lamp_types_three, 
		lamp_stabilityes_three,
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
		third_Illum_references_ten ,
	},
	A60: {
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
	},
	Ultra: {
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
		fifth_Illum_references_ten,
	},
	Star: {
		lamp_types_six,
		lamp_stabilityes_six,
		sixth_deviation_one, 
		sixth_deviation_two, 
		sixth_deviation_three,
		sixth_deviation_four,
		sixth_deviation_five,
		sixth_deviation_six, 
		sixth_deviation_seven,
		sixth_deviation_eight,
		sixth_deviation_nine,
		sixth_deviation_ten,
		one_measurement_results_sixth,
		two_measurement_results_sixth,
		three_measurement_results_sixth,
		four_measurement_results_sixth,
		five_measurement_results_sixth,
		six_measurement_results_sixth,
		seven_measurement_results_sixth,
		eight_measurement_results_sixth,
		nine_measurement_results_sixth,
		ten_measurement_results_sixth,
		one_extended_uncertaintyes_sixth,
		two_extended_uncertaintyes_sixth,
		three_extended_uncertaintyes_sixth,
		four_extended_uncertaintyes_sixth,
		five_extended_uncertaintyes_sixth,
		six_extended_uncertaintyes_sixth,
		seven_extended_uncertaintyes_sixth,
		eight_extended_uncertaintyes_sixth,
		nine_extended_uncertaintyes_sixth,
		ten_extended_uncertaintyes_sixth,
		oneIllum_references_sixth,
		twoIllum_references_sixth,
		threeIllum_references_sixth,
		fourIllum_references_sixth,
		fiveIllum_references_sixth,
		sixIllum_references_sixth,
		sevenIllum_references_sixth,
		eightIllum_references_sixth,
		nineIllum_references_sixth,
		tenIllum_references_sixth,
	},
	VT_1864: {
		lamp_types_seven,
		lamp_stabilityes_seven,
		seventh_deviation_one, 
		seventh_deviation_two, 
		seventh_deviation_three,
		seventh_deviation_four,
		seventh_deviation_five,
		seventh_deviation_six, 
		seventh_deviation_seven,
		seventh_deviation_eight,
		seventh_deviation_nine,
		seventh_deviation_ten,
		seventh_measurement_results_one,
		seventh_measurement_results_two,
		seventh_measurement_results_three,
		seventh_measurement_results_four,
		seventh_measurement_results_five,
		seventh_measurement_results_six,
		seventh_measurement_results_seven,
		seventh_measurement_results_eight,
		seventh_measurement_results_nine,
		seventh_measurement_results_ten,
		seventh_extended_uncertaintyes_one,
		seventh_extended_uncertaintyes_two,
		seventh_extended_uncertaintyes_three,
		seventh_extended_uncertaintyes_four,
		seventh_extended_uncertaintyes_five,
		seventh_extended_uncertaintyes_six,
		seventh_extended_uncertaintyes_seven,
		seventh_extended_uncertaintyes_eight,
		seventh_extended_uncertaintyes_nine,
		seventh_extended_uncertaintyes_ten,
		seventh_Illum_references_one,
		seventh_Illum_references_two,
		seventh_Illum_references_three,
		seventh_Illum_references_four,
		seventh_Illum_references_five,
		seventh_Illum_references_six,
		seventh_Illum_references_seven,
		seventh_Illum_references_eight,
		seventh_Illum_references_nine,
		seventh_Illum_references_ten,
	},
	Viva_cool: {
		lamp_types_eight,
		lamp_stabilityes_eight,
		eighth_deviation_one, 
		eighth_deviation_two, 
		eighth_deviation_three,
		eighth_deviation_four,
		eighth_deviation_five,
		eighth_deviation_six, 
		eighth_deviation_seven,
		eighth_deviation_eight,
		eighth_deviation_nine,
		eighth_deviation_ten,
		eighth_measurement_results_one,
		eighth_measurement_results_two,
		eighth_measurement_results_three,
		eighth_measurement_results_four,
		eighth_measurement_results_five,
		eighth_measurement_results_six,
		eighth_measurement_results_seven,
		eighth_measurement_results_eight,
		eighth_measurement_results_nine,
		eighth_measurement_results_ten,
		eighth_extended_uncertaintyes_one,
		eighth_extended_uncertaintyes_two,
		eighth_extended_uncertaintyes_three,
		eighth_extended_uncertaintyes_four,
		eighth_extended_uncertaintyes_five,
		eighth_extended_uncertaintyes_six,
		eighth_extended_uncertaintyes_seven,
		eighth_extended_uncertaintyes_eight,
		eighth_extended_uncertaintyes_nine,
		eighth_extended_uncertaintyes_ten,
		eighth_Illum_references_one,
		eighth_Illum_references_two,
		eighth_Illum_references_three,
		eighth_Illum_references_four,
		eighth_Illum_references_five,
		eighth_Illum_references_six,
		eighth_Illum_references_seven,
		eighth_Illum_references_eight,
		eighth_Illum_references_nine,
		eighth_Illum_references_ten,
	},
	Viva_warm: {
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
	},  
	OSRAM_6500: { 
		lamp_types_ten ,
		lamp_stabilityes_ten,
		tenth_deviation_one, 
		tenth_deviation_two, 
		tenth_deviation_three,
		tenth_deviation_four,
		tenth_deviation_five,
		tenth_deviation_six, 
		tenth_deviation_seven,
		tenth_deviation_eight,
		tenth_deviation_nine,
		tenth_deviation_ten,
		tenth_measurement_results_one,
		tenth_measurement_results_two,
		tenth_measurement_results_three,
		tenth_measurement_results_four,
		tenth_measurement_results_five,
		tenth_measurement_results_six,
		tenth_measurement_results_seven,
		tenth_measurement_results_eight,
		tenth_measurement_results_nine,
		tenth_measurement_results_ten,
		tenth_extended_uncertaintyes_one,
		tenth_extended_uncertaintyes_two,
		tenth_extended_uncertaintyes_three,
		tenth_extended_uncertaintyes_four,
		tenth_extended_uncertaintyes_five,
		tenth_extended_uncertaintyes_six,
		tenth_extended_uncertaintyes_seven,
		tenth_extended_uncertaintyes_eight,
		tenth_extended_uncertaintyes_nine,
		tenth_extended_uncertaintyes_ten,
		tenth_Illum_references_one,
		tenth_Illum_references_two,
		tenth_Illum_references_three,
		tenth_Illum_references_four,
		tenth_Illum_references_five,
		tenth_Illum_references_six,
		tenth_Illum_references_seven,
		tenth_Illum_references_eight,
		tenth_Illum_references_nine,
		tenth_Illum_references_ten,
	}
} = NewData;

const onChange = (e) => {
	setNewData((prevState) => ({
		...prevState, [e.target.name]: e.target.value,
		mhl: { ...prevState.mhl, [e.target.name]: e.target.value},
		lng: { ...prevState.lng, [e.target.name]: e.target.value},
		Ll_philips: { ...prevState.Ll_philips, [e.target.name]: e.target.value},
		A60: { ...prevState.A60, [e.target.name]: e.target.value},
		Ultra: { ...prevState.Ultra, [e.target.name]: e.target.value},
		Star: { ...prevState.Star, [e.target.name]: e.target.value},
		VT_1864: { ...prevState.VT_1864, [e.target.name]: e.target.value},
		Viva_cool: { ...prevState.Viva_cool, [e.target.name]: e.target.value},
		Viva_warm: { ...prevState.Viva_warm, [e.target.name]: e.target.value},
		OSRAM_6500: { ...prevState.OSRAM_6500, [e.target.name]: e.target.value},
		Ll_6500: { ...prevState.Ll_6500, [e.target.name]: e.target.value},
		lng_1: { ...prevState.lng_1, [e.target.name]: e.target.value},
	}))
};
const dispatch = useDispatch();
const navigate = useNavigate();
useEffect(() => {
	if (isError) {
		toast.error(message);
	}
	if (isSuccess) {
		dispatch(reset());
		navigate("/calibrations");
	}
	dispatch(reset());
}, [dispatch, isError, isSuccess, navigate, message]);
if (isLoading) {
	return <Spinner />;
}
const onSubmit = (e) => {
	e.preventDefault();
	dispatch(
		createCalibration({
			device,
			manufacturer,
			type_model,
			identification,
			client,
			application_num,
			town_village,
			quarter,
			street,
			number,
			block,
			еntrance,
			floor,
			apartment,
			cer_town_village,
			cer_quarter,
			cer_street,
			cer_number,
			cer_block,
			cer_еntrance,
			cer_floor,
			cer_apartment,
			calibration_date,
			number_pages,
			performed,
			num_calibration_certificate,
			data_calibration_certificate,
			calibration_method,
			logos,
			metrological_traceabilityes,
			air_temperature,
			air_temperature_un,
			relative_humidity,
			relative_humidity_un,
			primary_list,
			incoming_num,
			price,
			invoice,
			lng_1: {
				lamp_types_twelve ,
				lamp_stabilityes_twelve,
				twelfth_deviation_one, 
				twelfth_deviation_two, 
				twelfth_deviation_three,
				twelfth_deviation_four,
				twelfth_deviation_five,
				twelfth_deviation_six, 
				twelfth_deviation_seven,
				twelfth_deviation_eight,
				twelfth_deviation_nine,
				twelfth_deviation_ten,
				twelfth_measurement_results_one,
				twelfth_measurement_results_two,
				twelfth_measurement_results_three,
				twelfth_measurement_results_four,
				twelfth_measurement_results_five,
				twelfth_measurement_results_six,
				twelfth_measurement_results_seven,
				twelfth_measurement_results_eight,
				twelfth_measurement_results_nine,
				twelfth_measurement_results_ten,
				twelfth_extended_uncertaintyes_one,
				twelfth_extended_uncertaintyes_two,
				twelfth_extended_uncertaintyes_three,
				twelfth_extended_uncertaintyes_four,
				twelfth_extended_uncertaintyes_five,
				twelfth_extended_uncertaintyes_six,
				twelfth_extended_uncertaintyes_seven,
				twelfth_extended_uncertaintyes_eight,
				twelfth_extended_uncertaintyes_nine,
				twelfth_extended_uncertaintyes_ten,
				twelfth_Illum_references_one,
				twelfth_Illum_references_two,
				twelfth_Illum_references_three,
				twelfth_Illum_references_four,
				twelfth_Illum_references_five,
				twelfth_Illum_references_six,
				twelfth_Illum_references_seven,
				twelfth_Illum_references_eight,
				twelfth_Illum_references_nine,
				twelfth_Illum_references_ten,
			},
			Ll_6500: {lamp_types_eleven ,
				lamp_stabilityes_eleven,
				eleventh_deviation_one, 
				eleventh_deviation_two, 
				eleventh_deviation_three,
				eleventh_deviation_four,
				eleventh_deviation_five,
				eleventh_deviation_six, 
				eleventh_deviation_seven,
				eleventh_deviation_eight,
				eleventh_deviation_nine,
				eleventh_deviation_ten,
				eleventh_measurement_results_one,
				eleventh_measurement_results_two,
				eleventh_measurement_results_three,
				eleventh_measurement_results_four,
				eleventh_measurement_results_five,
				eleventh_measurement_results_six,
				eleventh_measurement_results_seven,
				eleventh_measurement_results_eight,
				eleventh_measurement_results_nine,
				eleventh_measurement_results_ten,
				eleventh_extended_uncertaintyes_one,
				eleventh_extended_uncertaintyes_two,
				eleventh_extended_uncertaintyes_three,
				eleventh_extended_uncertaintyes_four,
				eleventh_extended_uncertaintyes_five,
				eleventh_extended_uncertaintyes_six,
				eleventh_extended_uncertaintyes_seven,
				eleventh_extended_uncertaintyes_eight,
				eleventh_extended_uncertaintyes_nine,
				eleventh_extended_uncertaintyes_ten,
				eleventh_Illum_references_one,
				eleventh_Illum_references_two,
				eleventh_Illum_references_three,
				eleventh_Illum_references_four,
				eleventh_Illum_references_five,
				eleventh_Illum_references_six,
				eleventh_Illum_references_seven,
				eleventh_Illum_references_eight,
				eleventh_Illum_references_nine,
				eleventh_Illum_references_ten,
			},
			mhl: { 
				lamp_types_one,
				lamp_stability,
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
				ten_extended_uncertaintyes_mhl,
			},
			lng: {
				lamp_types_two,      
				lamp_stabilityes_two,
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
			},
			Ll_philips: { 
				lamp_types_three, 
				lamp_stabilityes_three,
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
				third_Illum_references_ten ,
			},
			A60: {
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
			},
			Ultra: {
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
				fifth_Illum_references_ten,
			},
			Star: {
				lamp_types_six,
				lamp_stabilityes_six,
				sixth_deviation_one, 
				sixth_deviation_two, 
				sixth_deviation_three,
				sixth_deviation_four,
				sixth_deviation_five,
				sixth_deviation_six, 
				sixth_deviation_seven,
				sixth_deviation_eight,
				sixth_deviation_nine,
				sixth_deviation_ten,
				one_measurement_results_sixth,
				two_measurement_results_sixth,
				three_measurement_results_sixth,
				four_measurement_results_sixth,
				five_measurement_results_sixth,
				six_measurement_results_sixth,
				seven_measurement_results_sixth,
				eight_measurement_results_sixth,
				nine_measurement_results_sixth,
				ten_measurement_results_sixth,
				one_extended_uncertaintyes_sixth,
				two_extended_uncertaintyes_sixth,
				three_extended_uncertaintyes_sixth,
				four_extended_uncertaintyes_sixth,
				five_extended_uncertaintyes_sixth,
				six_extended_uncertaintyes_sixth,
				seven_extended_uncertaintyes_sixth,
				eight_extended_uncertaintyes_sixth,
				nine_extended_uncertaintyes_sixth,
				ten_extended_uncertaintyes_sixth,
				oneIllum_references_sixth,
				twoIllum_references_sixth,
				threeIllum_references_sixth,
				fourIllum_references_sixth,
				fiveIllum_references_sixth,
				sixIllum_references_sixth,
				sevenIllum_references_sixth,
				eightIllum_references_sixth,
				nineIllum_references_sixth,
				tenIllum_references_sixth,
			},
			VT_1864: {
				lamp_types_seven,
				lamp_stabilityes_seven,
				seventh_deviation_one, 
				seventh_deviation_two, 
				seventh_deviation_three,
				seventh_deviation_four,
				seventh_deviation_five,
				seventh_deviation_six, 
				seventh_deviation_seven,
				seventh_deviation_eight,
				seventh_deviation_nine,
				seventh_deviation_ten,
				seventh_measurement_results_one,
				seventh_measurement_results_two,
				seventh_measurement_results_three,
				seventh_measurement_results_four,
				seventh_measurement_results_five,
				seventh_measurement_results_six,
				seventh_measurement_results_seven,
				seventh_measurement_results_eight,
				seventh_measurement_results_nine,
				seventh_measurement_results_ten,
				seventh_extended_uncertaintyes_one,
				seventh_extended_uncertaintyes_two,
				seventh_extended_uncertaintyes_three,
				seventh_extended_uncertaintyes_four,
				seventh_extended_uncertaintyes_five,
				seventh_extended_uncertaintyes_six,
				seventh_extended_uncertaintyes_seven,
				seventh_extended_uncertaintyes_eight,
				seventh_extended_uncertaintyes_nine,
				seventh_extended_uncertaintyes_ten,
				seventh_Illum_references_one,
				seventh_Illum_references_two,
				seventh_Illum_references_three,
				seventh_Illum_references_four,
				seventh_Illum_references_five,
				seventh_Illum_references_six,
				seventh_Illum_references_seven,
				seventh_Illum_references_eight,
				seventh_Illum_references_nine,
				seventh_Illum_references_ten,
			},
			Viva_cool: {
				lamp_types_eight,
				lamp_stabilityes_eight,
				eighth_deviation_one, 
				eighth_deviation_two, 
				eighth_deviation_three,
				eighth_deviation_four,
				eighth_deviation_five,
				eighth_deviation_six, 
				eighth_deviation_seven,
				eighth_deviation_eight,
				eighth_deviation_nine,
				eighth_deviation_ten,
				eighth_measurement_results_one,
				eighth_measurement_results_two,
				eighth_measurement_results_three,
				eighth_measurement_results_four,
				eighth_measurement_results_five,
				eighth_measurement_results_six,
				eighth_measurement_results_seven,
				eighth_measurement_results_eight,
				eighth_measurement_results_nine,
				eighth_measurement_results_ten,
				eighth_extended_uncertaintyes_one,
				eighth_extended_uncertaintyes_two,
				eighth_extended_uncertaintyes_three,
				eighth_extended_uncertaintyes_four,
				eighth_extended_uncertaintyes_five,
				eighth_extended_uncertaintyes_six,
				eighth_extended_uncertaintyes_seven,
				eighth_extended_uncertaintyes_eight,
				eighth_extended_uncertaintyes_nine,
				eighth_extended_uncertaintyes_ten,
				eighth_Illum_references_one,
				eighth_Illum_references_two,
				eighth_Illum_references_three,
				eighth_Illum_references_four,
				eighth_Illum_references_five,
				eighth_Illum_references_six,
				eighth_Illum_references_seven,
				eighth_Illum_references_eight,
				eighth_Illum_references_nine,
				eighth_Illum_references_ten,
			},
			Viva_warm: {
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
			},  
			OSRAM_6500: { lamp_types_ten ,
				lamp_stabilityes_ten,
				tenth_deviation_one, 
				tenth_deviation_two, 
				tenth_deviation_three,
				tenth_deviation_four,
				tenth_deviation_five,
				tenth_deviation_six, 
				tenth_deviation_seven,
				tenth_deviation_eight,
				tenth_deviation_nine,
				tenth_deviation_ten,
				tenth_measurement_results_one,
				tenth_measurement_results_two,
				tenth_measurement_results_three,
				tenth_measurement_results_four,
				tenth_measurement_results_five,
				tenth_measurement_results_six,
				tenth_measurement_results_seven,
				tenth_measurement_results_eight,
				tenth_measurement_results_nine,
				tenth_measurement_results_ten,
				tenth_extended_uncertaintyes_one,
				tenth_extended_uncertaintyes_two,
				tenth_extended_uncertaintyes_three,
				tenth_extended_uncertaintyes_four,
				tenth_extended_uncertaintyes_five,
				tenth_extended_uncertaintyes_six,
				tenth_extended_uncertaintyes_seven,
				tenth_extended_uncertaintyes_eight,
				tenth_extended_uncertaintyes_nine,
				tenth_extended_uncertaintyes_ten,
				tenth_Illum_references_one,
				tenth_Illum_references_two,
				tenth_Illum_references_three,
				tenth_Illum_references_four,
				tenth_Illum_references_five,
				tenth_Illum_references_six,
				tenth_Illum_references_seven,
				tenth_Illum_references_eight,
				tenth_Illum_references_nine,
				tenth_Illum_references_ten,
			} 
		})
);
};
if (isLoading) {
	return <Spinner />;
}
return (
	<div>
	<BackButton url="/" />
	<section className="heading">
	<h1>Ново калибриране</h1>
	<p>Моля попълнете формата</p>
	

	</section>
	<section>
	<div className="form-writer">
	<div className="form-group">
	<label htmlFor="name">Въвел - име</label>
	<input type="text" className="form-control" value={name} disabled />
	</div>
	<div className="form-group">
	<label htmlFor="email">Въвел - email</label>
	<input
	type="text"
	className="form-control"
	value={email}
	disabled
	/>
	</div>
	</div>
	<form onSubmit={onSubmit}>
	<h3>Данни за калибрирането</h3>
	<p>Полетата отбелязани с * са задължителни</p>
	<br />
	<div className="form">
	<div className="form-group">
	<label htmlFor="device">Средство за измерване:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={device}
	name="device"
	id="device"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="manufacturer">Производител:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={manufacturer}
	name="manufacturer"
	id="manufacturer"
	/>
	</div>


	<div className="form-group">
	<label htmlFor="type_model">Тип/Модел:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={type_model}
	name="type_model"
	id="type_model"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="identification">Идентификационен №:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={identification}
	name="identification"
	id="identification"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="client">Клиент:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={client}
	name="client"
	id="client"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="application_num">Заявка №:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={application_num}
	name="application_num"
	id="application_num"
	/>
	</div>
	</div>
	<h3>Адрес на клиента</h3>
	<div className="form">
	<div className="form-group">
	<label htmlFor="town_village">Град/Село:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={town_village}
	name="town_village"
	id="town_village"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="quarter">Квартал:</label>
	<input
	type="text"
	className="form-control"
	value={quarter}
	name="quarter"
	id="quarter"
	onChange={onChange}
	/>
	</div>
	<div className="form-group">
	<label htmlFor="street">Улица:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={street}
	name="street"
	id="street"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="number">№:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={number}
	name="number"
	id="number"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="block">Блок:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={block}
	name="block"
	id="block"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="еntrance">Вход:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={еntrance}
	name="еntrance"
	id="еntrance"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="floor">Етаж:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={floor}
	name="floor"
	id="floor"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="apartment">Апартамент:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={apartment}
	name="apartment"
	id="apartment"
	/>
	</div>
	</div>
	<h3>Адрес за сертификата</h3>
	<div className="form">
	<div className="form-group">
	<label htmlFor="cer_town_village">Град/Село:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={cer_town_village}
	name="cer_town_village"
	id="cer_town_village"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="cer_quarter">Квартал:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={cer_quarter}
	name="cer_quarter"
	id="cer_quarter"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="cer_street">Улица:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={cer_street}
	name="cer_street"
	id="cer_street"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="cer_number">№:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={cer_number}
	name="cer_number"
	id="cer_number"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="cer_block">Блок:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={cer_block}
	name="cer_block"
	id="cer_block"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="cer_еntrance">Вход:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={cer_еntrance}
	name="cer_еntrance"
	id="cer_еntrance"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="cer_floor">Етаж:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={cer_floor}
	name="cer_floor"
	id="cer_floor"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="cer_apartment">Апартамент:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={cer_apartment}
	name="cer_apartment"
	id="cer_apartment"
	/>
	</div>
	</div>
	<div className="form">
	<div className="form-group">
	<label htmlFor="num_calibration_certificate">№ на СК:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={num_calibration_certificate}
	name="num_calibration_certificate"
	id="num_calibration_certificate"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="data_calibration_certificate">
	Дата на издаване:
	</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={data_calibration_certificate}
	name="data_calibration_certificate"
	id="data_calibration_certificate"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="number_pages">Брой страници:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={number_pages}
	name="number_pages"
	id="number_pages"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="primary_list">Първичен протокол №:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={primary_list}
	name="primary_list"
	id="primary_list"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="calibration_date">Дата на калибриране:</label>
	<input
	type="date"
	className="form-control"
	onChange={onChange}
	value={calibration_date}
	name="calibration_date"
	id="calibration_date"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="incoming_num">№ от входящ дневник:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={incoming_num}
	name="incoming_num"
	id="incoming_num"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="price">Сума за калибриране:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={price}
	name="price"
	id="price"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="invoice">№ на фактура:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={invoice}
	name="invoice"
	id="invoice"
	/>
	</div>
	</div>
	<h4>*Извършил калибрирането:</h4>
	<div>
	<div id="check_radio">
	<label>
	{" "}
	<input
	name="performed"
	type="checkbox"
	value="началник отдел: Николай Александров"
	checked={performed === "началник отдел: Николай Александров"}
	onChange={onChange}
	/>
	&nbsp;&nbsp;началник отдел: Николай Александров
	</label>
	</div>
	<div id="check_radio">
	<label>
	<input
	name="performed"
	type="checkbox"
	value="главен експерт: Елица Петрова"
	checked={performed === "главен експерт: Елица Петрова"}
	onChange={onChange}
	/>
	&nbsp;&nbsp;главен експерт: Елица Петрова
	</label>
	</div>
	<div id="check_radio">
	<label>
	{" "}
	<input
	name="performed"
	type="checkbox"
	value="главен експерт: Елена Иванова"
	checked={performed === "главен експерт: Елена Иванова"}
	onChange={onChange}
	/>
	&nbsp;&nbsp;главен експерт: Елена Иванова
	</label>
	</div>
	</div>
	<h4>*Метод (методика) на калибриране:</h4>
	<div>
	<div id="check_radio">
	<label>
	<input
	name="calibration_method"
	type="radio"
	value="Методика за калибриране на луксметри с код ОАВ-ОИ-МК-18-lx"
	checked={
		calibration_method ===
		"Методика за калибриране на луксметри с код ОАВ-ОИ-МК-18-lx"
	}
	onChange={onChange}
	/>
	&nbsp;&nbsp;Методика за калибриране на луксметри с код
	ОАВ-ОИ-МК-18-lx
	</label>
	</div>
	<div id="check_radio">
	<label>
	<input
	name="calibration_method"
	type="radio"
	value="Друг - различен от ОАВ-ОИ-МК-18-lx"
	checked={
		calibration_method === "Друг - различен от ОАВ-ОИ-МК-18-lx"
	}
	onChange={onChange}
	/>
	&nbsp;&nbsp;Друг - различен от ОАВ-ОИ-МК-18-lx{" "}
	</label>
	</div>
	</div>
	<h4>*Лого</h4>
	<div>
	<div id="check_radio">
	<label>
	<input
	name="logos"
	type="radio"
	value="Сертификат с лого на Споразумението за взаимно признаване (MRA) на Международния комитет по мерки и теглилки (CIPM)"
	checked={
		logos ===
		"Сертификат с лого на Споразумението за взаимно признаване (MRA) на Международния комитет по мерки и теглилки (CIPM)"
	}
	onChange={onChange}
	/>
	&nbsp;&nbsp;Сертификат с лого на Споразумението за взаимно
	признаване (MRA) на Международния комитет по мерки и теглилки
	(CIPM)
	</label>
	</div>
	<div id="check_radio">
	<label>
	<input
	name="logos"
	type="radio"
	value="Не"
	checked={logos === "Не"}
	onChange={onChange}
	/>
	&nbsp;&nbsp;Не
	</label>
	</div>
	</div>
	<h4>*Метрологична проследимост</h4>
	<div>
	<div id="check_radio">
	<label>
	<input
	name="metrological_traceabilityes"
	type="checkbox"
	value="Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ."
	checked={
		metrological_traceabilityes ===
		"Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ."
	}
	onChange={onChange}
	/>
	&nbsp;&nbsp;Проследимостта на еталона е осигурена до
	Международната система на единици SI чрез три броя еталонни
	лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321,
	калибрирани в РТВ – Германия. Свидетелства за калибриране №44001
	PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от
	15.04.2019. Еталонен луксметър тип “B2” с идентификационен
	№0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ.
	</label>
	</div>
	<div id="check_radio">
	<label>
	<input
	name="metrological_traceabilityes"
	type="checkbox"
	value="Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ. Измервател на фототок I1000 с идентификационен №0692041, свидетелство за калибриране №060-ЕМИ/27.06.2019/ГД НЦМ."
	checked={
		metrological_traceabilityes ===
		"Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ. Измервател на фототок I1000 с идентификационен №0692041, свидетелство за калибриране №060-ЕМИ/27.06.2019/ГД НЦМ."
	}
	onChange={onChange}
	/>
	&nbsp;&nbsp;Проследимостта на еталона е осигурена до
	Международната система на единици SI чрез три броя еталонни
	лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321,
	калибрирани в РТВ – Германия. Свидетелства за калибриране №44001
	PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от
	15.04.2019. Еталонен луксметър тип “B2” с идентификационен
	№0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ.
	Измервател на фототок I1000 с идентификационен №0692041,
	свидетелство за калибриране №060-ЕМИ/27.06.2019/ГД НЦМ.
	</label>
	</div>
	</div>
	<h3>Резултати от калибрирането</h3>
	<h4>Условия при които е извършено калибрирането</h4>
	<div className="form">
	<div className="form-group">
	<label htmlFor="air_temperature">
	Температура на въздуха &#x2103;:
	</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={air_temperature}
	name="air_temperature"
	id="air_temperature"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="air_temperature_un">
	Температура на въздуха &#x2103; ±:
	</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={air_temperature_un}
	name="air_temperature_un"
	id="air_temperature_un"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="relative_humidity">Влажност на въздуха %:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={relative_humidity}
	name="relative_humidity"
	id="relative_humidity"
	/>
	</div>
	<div className="form-group">
	<label htmlFor="relative_humidity_un">Влажност % ±:</label>
	<input
	type="text"
	className="form-control"
	onChange={onChange}
	value={relative_humidity_un}
	name="relative_humidity_un"
	id="relative_humidity_un"
	/>
	</div>
	</div>
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
	onClick={onShowInsertOne}
	className="btn btn-block btn-danger"
	>
	Въвеждане на данни
	</div>
	<div>
	{showInsertOne && 
		<First
		onChange={onChange}
		lamp_types_one={NewData.lamp_types_one}
		lamp_stability={NewData.lamp_stability}
		mhl_deviation_one  ={NewData.mhl_deviation_one}
		mhl_deviation_two  ={NewData.mhl_deviation_two}
		mhl_deviation_three ={NewData.mhl_deviation_three}
		mhl_deviation_four ={NewData.mhl_deviation_four}
		mhl_deviation_five ={NewData.mhl_deviation_five}
		mhl_deviation_six  ={NewData.mhl_deviation_six}
		mhl_deviation_seven ={NewData.mhl_deviation_seven}
		mhl_deviation_eight ={NewData.mhl_deviation_eight}
		mhl_deviation_nine ={NewData.mhl_deviation_nine}
		mhl_deviation_ten ={NewData.mhl_deviation_ten}

		oneIllum_references_mhl ={NewData.oneIllum_references_mhl}
		one_measurement_results_mhl ={NewData.one_measurement_results_mhl}
		one_extended_uncertaintyes_mhl ={NewData.one_extended_uncertaintyes_mhl}
		twoIllum_references_mhl ={NewData.twoIllum_references_mhl}
		two_measurement_results_mhl ={NewData.two_measurement_results_mhl}
		two_extended_uncertaintyes_mhl ={NewData.two_extended_uncertaintyes_mhl}
		threeIllum_references_mhl ={NewData.threeIllum_references_mhl}
		three_measurement_results_mhl ={NewData.three_measurement_results_mhl}
		three_extended_uncertaintyes_mhl ={NewData.three_extended_uncertaintyes_mhl}
		fourIllum_references_mhl ={NewData.fourIllum_references_mhl}
		four_measurement_results_mhl ={NewData.four_measurement_results_mhl}
		four_extended_uncertaintyes_mhl ={NewData.four_extended_uncertaintyes_mhl}
		fiveIllum_references_mhl ={NewData.fiveIllum_references_mhl}
		five_measurement_results_mhl ={NewData.five_measurement_results_mhl}
		five_extended_uncertaintyes_mhl ={NewData.five_extended_uncertaintyes_mhl}
		sixIllum_references_mhl ={NewData.sixIllum_references_mhl}
		six_measurement_results_mhl ={NewData.six_measurement_results_mhl}
		six_extended_uncertaintyes_mhl ={NewData.six_extended_uncertaintyes_mhl}
		sevenIllum_references_mhl ={NewData.sevenIllum_references_mhl}
		seven_measurement_results_mhl ={NewData.seven_measurement_results_mhl}
		seven_extended_uncertaintyes_mhl ={NewData.seven_extended_uncertaintyes_mhl}
		eightIllum_references_mhl ={NewData.eightIllum_references_mhl}
		eight_measurement_results_mhl ={NewData.eight_measurement_results_mhl}
		eight_extended_uncertaintyes_mhl ={NewData.eight_extended_uncertaintyes_mhl}
		nineIllum_references_mhl ={NewData.nineIllum_references_mhl}
		nine_measurement_results_mhl ={NewData.nine_measurement_results_mhl}
		nine_extended_uncertaintyes_mhl ={NewData.nine_extended_uncertaintyes_mhl}
		tenIllum_references_mhl ={NewData.tenIllum_references_mhl}
		ten_measurement_results_mhl ={NewData.ten_measurement_results_mhl}
		ten_extended_uncertaintyes_mhl ={NewData.ten_extended_uncertaintyes_mhl}
		/>}
		</div> 	
		</TabPanel>
		<TabPanel>
		<div
		onClick={onShowInsertTwo}
		className="btn btn-block btn-danger"
		>
		Въвеждане на данни
		</div>
		<div>
		{showInsertTwo &&
			<Second
			onChange={onChange}
			lamp_types_two ={NewData.lamp_types_two}
			lamp_stabilityes_two ={NewData.lamp_stabilityes_two}
			electricity_two ={NewData.electricity_two}
			voltage_two ={NewData.voltage_two}
			lng_deviation_one ={NewData.lng_deviation_one}
			lng_deviation_two ={NewData.lng_deviation_two}
			lng_deviation_three ={NewData.lng_deviation_three}
			lng_deviation_four ={NewData.lng_deviation_four}
			lng_deviation_five ={NewData.lng_deviation_five}
			lng_deviation_six ={NewData.lng_deviation_six}
			lng_deviation_seven ={NewData.lng_deviation_seven}
			lng_deviation_eight ={NewData.lng_deviation_eight}
			lng_deviation_nine ={NewData.lng_deviation_nine}
			lng_deviation_ten ={NewData.lng_deviation_ten}
			sec_measurement_results_one_lng ={NewData.sec_measurement_results_one_lng}
			sec_extended_uncertaintyes_one_lng ={NewData.sec_extended_uncertaintyes_one_lng}
			sec_Illum_references_one_lng ={NewData.sec_Illum_references_one_lng}
			sec_measurement_results_two_lng ={NewData.sec_measurement_results_two_lng}
			sec_extended_uncertaintyes_two_lng ={NewData.sec_extended_uncertaintyes_two_lng}
			sec_Illum_references_two_lng ={NewData.sec_Illum_references_two_lng}
			sec_measurement_results_three_lng ={NewData.sec_measurement_results_three_lng}
			sec_extended_uncertaintyes_three_lng ={NewData.sec_extended_uncertaintyes_three_lng}
			sec_Illum_references_three_lng ={NewData.sec_Illum_references_three_lng}
			sec_measurement_results_four_lng ={NewData.sec_measurement_results_four_lng}
			sec_extended_uncertaintyes_four_lng ={NewData.sec_extended_uncertaintyes_four_lng}
			sec_Illum_references_four_lng ={NewData.sec_Illum_references_four_lng}
			sec_measurement_results_five_lng ={NewData.sec_measurement_results_five_lng}
			sec_extended_uncertaintyes_five_lng ={NewData.sec_extended_uncertaintyes_five_lng}
			sec_Illum_references_five_lng ={NewData.sec_Illum_references_five_lng}
			sec_measurement_results_six_lng ={NewData.sec_measurement_results_six_lng}
			sec_extended_uncertaintyes_six_lng ={NewData.sec_extended_uncertaintyes_six_lng}
			sec_Illum_references_six_lng ={NewData.sec_Illum_references_six_lng}
			sec_measurement_results_seven_lng ={NewData.sec_measurement_results_seven_lng}
			sec_extended_uncertaintyes_seven_lng ={NewData.sec_extended_uncertaintyes_seven_lng}
			sec_Illum_references_seven_lng ={NewData.sec_Illum_references_seven_lng}
			sec_measurement_results_eight_lng ={NewData.sec_measurement_results_eight_lng}
			sec_extended_uncertaintyes_eight_lng ={NewData.sec_extended_uncertaintyes_eight_lng}
			sec_Illum_references_eight_lng ={NewData.sec_Illum_references_eight_lng}
			sec_measurement_results_nine_lng ={NewData.sec_measurement_results_nine_lng}
			sec_extended_uncertaintyes_nine_lng ={NewData.sec_extended_uncertaintyes_nine_lng}
			sec_Illum_references_nine_lng ={NewData.sec_Illum_references_nine_lng}
			sec_measurement_results_ten _lng ={NewData.sec_measurement_results_ten_lng}
			sec_extended_uncertaintyes_ten_lng ={NewData.sec_extended_uncertaintyes_ten_lng}
			sec_Illum_references_ten_lng ={NewData.sec_Illum_references_ten_lng}
			/>}
			</div>	
			</TabPanel>
			<TabPanel>
			<div
			onClick={onShowInsertThree}
			className="btn btn-block btn-danger"
			>
			Въвеждане на данни
			</div>
			<div>
			{showInsertThree && 
				<Third
				onChange={onChange}
				lamp_types_three={NewData.lamp_types_three} 
				lamp_stabilityes_three={NewData.lamp_stabilityes_three}
				third_deviation_one ={NewData.third_deviation_one}
				third_deviation_two ={NewData.third_deviation_two}
				third_deviation_three ={NewData.third_deviation_three}
				third_deviation_four ={NewData.third_deviation_four}
				third_deviation_five ={NewData.third_deviation_five}
				third_deviation_six ={NewData.third_deviation_six}
				third_deviation_seven ={NewData.third_deviation_seven}
				third_deviation_eight ={NewData.third_deviation_eight}
				third_deviation_nine ={NewData.third_deviation_nine}
				third_deviation_ten ={NewData.third_deviation_ten}
				third_measurement_results_one={NewData.third_measurement_results_one} 
				third_measurement_results_two={NewData.third_measurement_results_two}
				third_measurement_results_three={NewData.third_measurement_results_three}
				third_measurement_results_four={NewData.third_measurement_results_four}
				third_measurement_results_five={NewData.third_measurement_results_five}
				third_measurement_results_six={NewData.third_measurement_results_six}
				third_measurement_results_seven={NewData.third_measurement_results_seven}
				third_measurement_results_eight={NewData.third_measurement_results_eight}
				third_measurement_results_nine={NewData.third_measurement_results_nine}
				third_measurement_results_ten={NewData.third_measurement_results_ten}
				third_extended_uncertaintyes_one={NewData.third_extended_uncertaintyes_one}
				third_extended_uncertaintyes_two={NewData.third_extended_uncertaintyes_two}
				third_extended_uncertaintyes_three={NewData.third_extended_uncertaintyes_three}
				third_extended_uncertaintyes_four={NewData.third_extended_uncertaintyes_four}
				third_extended_uncertaintyes_five={NewData.third_extended_uncertaintyes_five}
				third_extended_uncertaintyes_six={NewData.third_extended_uncertaintyes_six}
				third_extended_uncertaintyes_seven={NewData.third_extended_uncertaintyes_seven}
				third_extended_uncertaintyes_eight={NewData.third_extended_uncertaintyes_eight}
				third_extended_uncertaintyes_nine={NewData.third_extended_uncertaintyes_nine}
				third_extended_uncertaintyes_ten={NewData.third_extended_uncertaintyes_ten}
				third_Illum_references_one={NewData.third_Illum_references_one}
				third_Illum_references_two={NewData.third_Illum_references_two}
				third_Illum_references_three={NewData.third_Illum_references_three}
				third_Illum_references_four={NewData.third_Illum_references_four}
				third_Illum_references_five={NewData.third_Illum_references_five}
				third_Illum_references_six={NewData.third_Illum_references_six}
				third_Illum_references_seven={NewData.third_Illum_references_seven}
				third_Illum_references_eight={NewData.third_Illum_references_eight}
				third_Illum_references_nine={NewData.third_Illum_references_nine}
				third_Illum_references_ten={NewData.third_Illum_references_ten}
				/>}
				</div> 	
				</TabPanel>
				<TabPanel>
				<div
				onClick={onShowInsertFour}
				className="btn btn-block btn-danger"
				>
				Въвеждане на данни
				</div>
				<div>
				{showInsertFour &&
					<Fourth
					onChange={onChange} 
					lamp_types_four ={NewData.lamp_types_four }
					lamp_stabilityes_four ={NewData.lamp_stabilityes_four }
					fourth_deviation_one ={NewData.fourth_deviation_one}
					fourth_deviation_two ={NewData.fourth_deviation_two}
					fourth_deviation_three ={NewData.fourth_deviation_three}
					fourth_deviation_four ={NewData.fourth_deviation_four}
					fourth_deviation_five ={NewData.fourth_deviation_five}
					fourth_deviation_six ={NewData.fourth_deviation_six}
					fourth_deviation_seven ={NewData.fourth_deviation_seven}
					fourth_deviation_eight ={NewData.fourth_deviation_eight}
					fourth_deviation_nine ={NewData.fourth_deviation_nine}
					fourth_deviation_ten ={NewData.fourth_deviation_ten}
					fourth_measurement_results_one ={NewData.fourth_measurement_results_one }
					fourth_measurement_results_two ={NewData.fourth_measurement_results_two }
					fourth_measurement_results_three ={NewData.fourth_measurement_results_three }
					fourth_measurement_results_four ={NewData.fourth_measurement_results_four }
					fourth_measurement_results_five ={NewData.fourth_measurement_results_five }
					fourth_measurement_results_six ={NewData.fourth_measurement_results_six }
					fourth_measurement_results_seven ={NewData.fourth_measurement_results_seven }
					fourth_measurement_results_eight ={NewData.fourth_measurement_results_eight }
					fourth_measurement_results_nine ={NewData.fourth_measurement_results_nine }
					fourth_measurement_results_ten ={NewData.fourth_measurement_results_ten }
					fourth_extended_uncertaintyes_one ={NewData.fourth_extended_uncertaintyes_one }
					fourth_extended_uncertaintyes_two ={NewData.fourth_extended_uncertaintyes_two }
					fourth_extended_uncertaintyes_three ={NewData.fourth_extended_uncertaintyes_three }
					fourth_extended_uncertaintyes_four ={NewData.fourth_extended_uncertaintyes_four }
					fourth_extended_uncertaintyes_five ={NewData.fourth_extended_uncertaintyes_five }
					fourth_extended_uncertaintyes_six ={NewData.fourth_extended_uncertaintyes_six }
					fourth_extended_uncertaintyes_seven ={NewData.fourth_extended_uncertaintyes_seven }
					fourth_extended_uncertaintyes_eight ={NewData.fourth_extended_uncertaintyes_eight }
					fourth_extended_uncertaintyes_nine ={NewData.fourth_extended_uncertaintyes_nine }
					fourth_extended_uncertaintyes_ten ={NewData.fourth_extended_uncertaintyes_ten }
					fourth_Illum_references_one ={NewData.fourth_Illum_references_one }
					fourth_Illum_references_two ={NewData.fourth_Illum_references_two }
					fourth_Illum_references_three ={NewData.fourth_Illum_references_three }
					fourth_Illum_references_four ={NewData.fourth_Illum_references_four }
					fourth_Illum_references_five ={NewData.fourth_Illum_references_five }
					fourth_Illum_references_six ={NewData.fourth_Illum_references_six }
					fourth_Illum_references_seven ={NewData.fourth_Illum_references_seven }
					fourth_Illum_references_eight ={NewData.fourth_Illum_references_eight }
					fourth_Illum_references_nine ={NewData.fourth_Illum_references_nine }
					fourth_Illum_references_ten ={NewData.fourth_Illum_references_ten }
					/>}
					</div>
					</TabPanel>
					<TabPanel>
					<div
					onClick={onShowInsertFive}
					className="btn btn-block btn-danger"
					>
					Въвеждане на данни
					</div>
					<div>
					{showInsertFive &&
						<Fifth
						onChange={onChange}
						lamp_types_five={NewData.lamp_types_five}
						lamp_stabilityes_five={NewData.lamp_stabilityes_five}
						fifth_deviation_one ={NewData.fifth_deviation_one}
						fifth_deviation_two ={NewData.fifth_deviation_two}
						fifth_deviation_three ={NewData.fifth_deviation_three}
						fifth_deviation_four ={NewData.fifth_deviation_four}
						fifth_deviation_five ={NewData.fifth_deviation_five}
						fifth_deviation_six ={NewData.fifth_deviation_six}
						fifth_deviation_seven ={NewData.fifth_deviation_seven}
						fifth_deviation_eight ={NewData.fifth_deviation_eight}
						fifth_deviation_nine ={NewData.fifth_deviation_nine}
						fifth_deviation_ten ={NewData.fifth_deviation_ten}
						fifth_measurement_results_one={NewData.fifth_measurement_results_one}
						fifth_measurement_results_two={NewData.fifth_measurement_results_two}
						fifth_measurement_results_three={NewData.fifth_measurement_results_three}
						fifth_measurement_results_four={NewData.fifth_measurement_results_four}
						fifth_measurement_results_five={NewData.fifth_measurement_results_five}
						fifth_measurement_results_six={NewData.fifth_measurement_results_six}
						fifth_measurement_results_seven={NewData.fifth_measurement_results_seven}
						fifth_measurement_results_eight={NewData.fifth_measurement_results_eight}
						fifth_measurement_results_nine={NewData.fifth_measurement_results_nine}
						fifth_measurement_results_ten={NewData.fifth_measurement_results_ten}
						fifth_extended_uncertaintyes_one={NewData.fifth_extended_uncertaintyes_one}
						fifth_extended_uncertaintyes_two={NewData.fifth_extended_uncertaintyes_two}
						fifth_extended_uncertaintyes_three={NewData.fifth_extended_uncertaintyes_three}
						fifth_extended_uncertaintyes_four={NewData.fifth_extended_uncertaintyes_four}
						fifth_extended_uncertaintyes_five={NewData.fifth_extended_uncertaintyes_five}
						fifth_extended_uncertaintyes_six={NewData.fifth_extended_uncertaintyes_six}
						fifth_extended_uncertaintyes_seven={NewData.fifth_extended_uncertaintyes_seven}
						fifth_extended_uncertaintyes_eight={NewData.fifth_extended_uncertaintyes_eight}
						fifth_extended_uncertaintyes_nine={NewData.fifth_extended_uncertaintyes_nine}
						fifth_extended_uncertaintyes_ten={NewData.fifth_extended_uncertaintyes_ten}
						fifth_Illum_references_one={NewData.fifth_Illum_references_one}
						fifth_Illum_references_two={NewData.fifth_Illum_references_two}
						fifth_Illum_references_three={NewData.fifth_Illum_references_three}
						fifth_Illum_references_four={NewData.fifth_Illum_references_four}
						fifth_Illum_references_five={NewData.fifth_Illum_references_five}
						fifth_Illum_references_six={NewData.fifth_Illum_references_six}
						fifth_Illum_references_seven={NewData.fifth_Illum_references_seven}
						fifth_Illum_references_eight={NewData.fifth_Illum_references_eight}
						fifth_Illum_references_nine={NewData.fifth_Illum_references_nine}
						fifth_Illum_references_ten={NewData.fifth_Illum_references_ten}
						/>}
						</div>
						</TabPanel>
						<TabPanel>
						<div
						onClick={onShowInsertSix}
						className="btn btn-block btn-danger"
						>
						Въвеждане на данни
						</div>
						<div>
						{showInsertSix &&
							<Sixth
							onChange={onChange}
							lamp_types_six={NewData.lamp_types_six}
							lamp_stabilityes_six={NewData.lamp_stabilityes_six}
							sixth_deviation_one ={NewData.sixth_deviation_one}
							sixth_deviation_two ={NewData.sixth_deviation_two}
							sixth_deviation_three ={NewData.sixth_deviation_three}
							sixth_deviation_four ={NewData.sixth_deviation_four}
							sixth_deviation_five ={NewData.sixth_deviation_five}
							sixth_deviation_six ={NewData.sixth_deviation_six}
							sixth_deviation_seven ={NewData.sixth_deviation_seven}
							sixth_deviation_eight ={NewData.sixth_deviation_eight}
							sixth_deviation_nine ={NewData.sixth_deviation_nine}
							sixth_deviation_ten ={NewData.sixth_deviation_ten}
							one_measurement_results_sixth={NewData.one_measurement_results_sixth}
							two_measurement_results_sixth={NewData.two_measurement_results_sixth}
							three_measurement_results_sixth={NewData.three_measurement_results_sixth}
							four_measurement_results_sixth={NewData.four_measurement_results_sixth}
							five_measurement_results_sixth={NewData.five_measurement_results_sixth}
							six_measurement_results_sixth={NewData.six_measurement_results_sixth}
							seven_measurement_results_sixth={NewData.seven_measurement_results_sixth}
							eight_measurement_results_sixth={NewData.eight_measurement_results_sixth}
							nine_measurement_results_sixth={NewData.nine_measurement_results_sixth}
							ten_measurement_results_sixth={NewData.ten_measurement_results_sixth}
							one_extended_uncertaintyes_sixth={NewData.one_extended_uncertaintyes_sixth}
							two_extended_uncertaintyes_sixth={NewData.two_extended_uncertaintyes_sixth}
							three_extended_uncertaintyes_sixth={NewData.three_extended_uncertaintyes_sixth}
							four_extended_uncertaintyes_sixth={NewData.four_extended_uncertaintyes_sixth}
							five_extended_uncertaintyes_sixth={NewData.five_extended_uncertaintyes_sixth}
							six_extended_uncertaintyes_sixth={NewData.six_extended_uncertaintyes_sixth}
							seven_extended_uncertaintyes_sixth={NewData.seven_extended_uncertaintyes_sixth}
							eight_extended_uncertaintyes_sixth={NewData.eight_extended_uncertaintyes_sixth}
							nine_extended_uncertaintyes_sixth={NewData.nine_extended_uncertaintyes_sixth}
							ten_extended_uncertaintyes_sixth={NewData.ten_extended_uncertaintyes_sixth}
							oneIllum_references_sixth={NewData.oneIllum_references_sixth}
							twoIllum_references_sixth={NewData.twoIllum_references_sixth}
							threeIllum_references_sixth={NewData.threeIllum_references_sixth}
							fourIllum_references_sixth={NewData.fourIllum_references_sixth}
							fiveIllum_references_sixth={NewData.fiveIllum_references_sixth}
							sixIllum_references_sixth={NewData.sixIllum_references_sixth}
							sevenIllum_references_sixth={NewData.sevenIllum_references_sixth}
							eightIllum_references_sixth={NewData.eightIllum_references_sixth}
							nineIllum_references_sixth={NewData.nineIllum_references_sixth}
							tenIllum_references_sixth={NewData.tenIllum_references_sixth}
							/>}
							</div>
							</TabPanel>
							<TabPanel>
							<div
							onClick={onShowInsertSeven}
							className="btn btn-block btn-danger"
							>
							Въвеждане на данни
							</div>
							<div>
							{showInsertSeven &&
								<Seventh
								onChange={onChange}
								lamp_types_seven={NewData.lamp_types_seven}
								lamp_stabilityes_seven={NewData.lamp_stabilityes_seven}
								seventh_deviation_one ={NewData.seventh_deviation_one}
								seventh_deviation_two ={NewData.seventh_deviation_two}
								seventh_deviation_three ={NewData.seventh_deviation_three}
								seventh_deviation_four ={NewData.seventh_deviation_four}
								seventh_deviation_five ={NewData.seventh_deviation_five}
								seventh_deviation_six ={NewData.seventh_deviation_six}
								seventh_deviation_seven ={NewData.seventh_deviation_seven}
								seventh_deviation_eight ={NewData.seventh_deviation_eight}
								seventh_deviation_nine ={NewData.seventh_deviation_nine}
								seventh_deviation_ten ={NewData.seventh_deviation_ten}
								seventh_measurement_results_one={NewData.seventh_measurement_results_one}
								seventh_measurement_results_two={NewData.seventh_measurement_results_two}
								seventh_measurement_results_three={NewData.seventh_measurement_results_three}
								seventh_measurement_results_four={NewData.seventh_measurement_results_four}
								seventh_measurement_results_five={NewData.seventh_measurement_results_five}
								seventh_measurement_results_six={NewData.seventh_measurement_results_six}
								seventh_measurement_results_seven={NewData.seventh_measurement_results_seven}
								seventh_measurement_results_eight={NewData.seventh_measurement_results_eight}
								seventh_measurement_results_nine={NewData.seventh_measurement_results_nine}
								seventh_measurement_results_ten={NewData.seventh_measurement_results_ten}
								seventh_extended_uncertaintyes_one={NewData.seventh_extended_uncertaintyes_one}
								seventh_extended_uncertaintyes_two={NewData.seventh_extended_uncertaintyes_two}
								seventh_extended_uncertaintyes_three={NewData.seventh_extended_uncertaintyes_three}
								seventh_extended_uncertaintyes_four={NewData.seventh_extended_uncertaintyes_four}
								seventh_extended_uncertaintyes_five={NewData.seventh_extended_uncertaintyes_five}
								seventh_extended_uncertaintyes_six={NewData.seventh_extended_uncertaintyes_six}
								seventh_extended_uncertaintyes_seven={NewData.seventh_extended_uncertaintyes_seven}
								seventh_extended_uncertaintyes_eight={NewData.seventh_extended_uncertaintyes_eight}
								seventh_extended_uncertaintyes_nine={NewData.seventh_extended_uncertaintyes_nine}
								seventh_extended_uncertaintyes_ten={NewData.seventh_extended_uncertaintyes_ten}
								seventh_Illum_references_one={NewData.seventh_Illum_references_one}
								seventh_Illum_references_two={NewData.seventh_Illum_references_two}
								seventh_Illum_references_three={NewData.seventh_Illum_references_three}
								seventh_Illum_references_four={NewData.seventh_Illum_references_four}
								seventh_Illum_references_five={NewData.seventh_Illum_references_five}
								seventh_Illum_references_six={NewData.seventh_Illum_references_six}
								seventh_Illum_references_seven={NewData.seventh_Illum_references_seven}
								seventh_Illum_references_eight={NewData.seventh_Illum_references_eight}
								seventh_Illum_references_nine={NewData.seventh_Illum_references_nine}
								seventh_Illum_references_ten={NewData.seventh_Illum_references_ten}
								/>}
								</div>
								</TabPanel>
								<TabPanel>
								<div
								onClick={onShowInsertEighth}
								className="btn btn-block btn-danger"
								>
								Въвеждане на данни
								</div>
								<div>
								{showInsertEighth &&
									<Eighth
									onChange={onChange}
									lamp_types_eight={NewData.lamp_types_eight}
									lamp_stabilityes_eight={NewData.lamp_stabilityes_eight}
									eighth_deviation_one ={NewData.eighth_deviation_one}
									eighth_deviation_two ={NewData.eighth_deviation_two}
									eighth_deviation_three ={NewData.eighth_deviation_three}
									eighth_deviation_four ={NewData.eighth_deviation_four}
									eighth_deviation_five ={NewData.eighth_deviation_five}
									eighth_deviation_six ={NewData.eighth_deviation_six}
									eighth_deviation_seven ={NewData.eighth_deviation_seven}
									eighth_deviation_eight ={NewData.eighth_deviation_eight}
									eighth_deviation_nine ={NewData.eighth_deviation_nine}
									eighth_deviation_ten ={NewData.eighth_deviation_ten}
									eighth_measurement_results_one={NewData.eighth_measurement_results_one}
									eighth_measurement_results_two={NewData.eighth_measurement_results_two}
									eighth_measurement_results_three={NewData.eighth_measurement_results_three}
									eighth_measurement_results_four={NewData.eighth_measurement_results_four}
									eighth_measurement_results_five={NewData.eighth_measurement_results_five}
									eighth_measurement_results_six={NewData.eighth_measurement_results_six}
									eighth_measurement_results_seven={NewData.eighth_measurement_results_seven}
									eighth_measurement_results_eight={NewData.eighth_measurement_results_eight}
									eighth_measurement_results_nine={NewData.eighth_measurement_results_nine}
									eighth_measurement_results_ten={NewData.eighth_measurement_results_ten}
									eighth_extended_uncertaintyes_one={NewData.eighth_extended_uncertaintyes_one}
									eighth_extended_uncertaintyes_two={NewData.eighth_extended_uncertaintyes_two}
									eighth_extended_uncertaintyes_three={NewData.eighth_extended_uncertaintyes_three}
									eighth_extended_uncertaintyes_four={NewData.eighth_extended_uncertaintyes_four}
									eighth_extended_uncertaintyes_five={NewData.eighth_extended_uncertaintyes_five}
									eighth_extended_uncertaintyes_six={NewData.eighth_extended_uncertaintyes_six}
									eighth_extended_uncertaintyes_seven={NewData.eighth_extended_uncertaintyes_seven}
									eighth_extended_uncertaintyes_eight={NewData.eighth_extended_uncertaintyes_eight}
									eighth_extended_uncertaintyes_nine={NewData.eighth_extended_uncertaintyes_nine}
									eighth_extended_uncertaintyes_ten={NewData.eighth_extended_uncertaintyes_ten}
									eighth_Illum_references_one={NewData.eighth_Illum_references_one}
									eighth_Illum_references_two={NewData.eighth_Illum_references_two}
									eighth_Illum_references_three={NewData.eighth_Illum_references_three}
									eighth_Illum_references_four={NewData.eighth_Illum_references_four}
									eighth_Illum_references_five={NewData.eighth_Illum_references_five}
									eighth_Illum_references_six={NewData.eighth_Illum_references_six}
									eighth_Illum_references_seven={NewData.eighth_Illum_references_seven}
									eighth_Illum_references_eight={NewData.eighth_Illum_references_eight}
									eighth_Illum_references_nine={NewData.eighth_Illum_references_nine}
									eighth_Illum_references_ten={NewData.eighth_Illum_references_ten}
									/>}
									</div>
									</TabPanel>
									<TabPanel>
									<div
									onClick={onShowInsertNine}
									className="btn btn-block btn-danger"
									>
									Въвеждане на данни
									</div>
									<div>
									{showInsertNine &&
										<Ninth
										onChange={onChange}
										lamp_types_nine={NewData.lamp_types_nine}
										lamp_stabilityes_nine={NewData.lamp_stabilityes_nine}
										ninth_deviation_one ={NewData.ninth_deviation_one}
										ninth_deviation_two ={NewData.ninth_deviation_two}
										ninth_deviation_three ={NewData.ninth_deviation_three}
										ninth_deviation_four ={NewData.ninth_deviation_four}
										ninth_deviation_five ={NewData.ninth_deviation_five}
										ninth_deviation_six ={NewData.ninth_deviation_six}
										ninth_deviation_seven ={NewData.ninth_deviation_seven}
										ninth_deviation_eight ={NewData.ninth_deviation_eight}
										ninth_deviation_nine ={NewData.ninth_deviation_nine}
										ninth_deviation_ten ={NewData.ninth_deviation_ten}
										ninth_measurement_results_one={NewData.ninth_measurement_results_one}
										ninth_measurement_results_two={NewData.ninth_measurement_results_two}
										ninth_measurement_results_three={NewData.ninth_measurement_results_three}
										ninth_measurement_results_four={NewData.ninth_measurement_results_four}
										ninth_measurement_results_five={NewData.ninth_measurement_results_five}
										ninth_measurement_results_six={NewData.ninth_measurement_results_six}
										ninth_measurement_results_seven={NewData.ninth_measurement_results_seven}
										ninth_measurement_results_eight={NewData.ninth_measurement_results_eight}
										ninth_measurement_results_nine={NewData.ninth_measurement_results_nine}
										ninth_measurement_results_ten={NewData.ninth_measurement_results_ten}
										ninth_extended_uncertaintyes_one={NewData.ninth_extended_uncertaintyes_one}
										ninth_extended_uncertaintyes_two={NewData.ninth_extended_uncertaintyes_two}
										ninth_extended_uncertaintyes_three={NewData.ninth_extended_uncertaintyes_three}
										ninth_extended_uncertaintyes_four={NewData.ninth_extended_uncertaintyes_four}
										ninth_extended_uncertaintyes_five={NewData.ninth_extended_uncertaintyes_five}
										ninth_extended_uncertaintyes_six={NewData.ninth_extended_uncertaintyes_six}
										ninth_extended_uncertaintyes_seven={NewData.ninth_extended_uncertaintyes_seven}
										ninth_extended_uncertaintyes_eight={NewData.ninth_extended_uncertaintyes_eight}
										ninth_extended_uncertaintyes_nine={NewData.ninth_extended_uncertaintyes_nine}
										ninth_extended_uncertaintyes_ten={NewData.ninth_extended_uncertaintyes_ten}
										ninth_Illum_references_one={NewData.ninth_Illum_references_one}
										ninth_Illum_references_two={NewData.ninth_Illum_references_two}
										ninth_Illum_references_three={NewData.ninth_Illum_references_three}
										ninth_Illum_references_four={NewData.ninth_Illum_references_four}
										ninth_Illum_references_five={NewData.ninth_Illum_references_five}
										ninth_Illum_references_six={NewData.ninth_Illum_references_six}
										ninth_Illum_references_seven={NewData.ninth_Illum_references_seven}
										ninth_Illum_references_eight={NewData.ninth_Illum_references_eight}
										ninth_Illum_references_nine={NewData.ninth_Illum_references_nine}
										ninth_Illum_references_ten  ={NewData.ninth_Illum_references_ten  }
										/>}
										</div>
										</TabPanel>
										<TabPanel>
										<div
										onClick={onShowInsertTen}
										className="btn btn-block btn-danger"
										>
										Въвеждане на данни
										</div>
										<div>
										{showInsertTen &&
											<Tenth
											onChange={onChange}
											lamp_types_ten={NewData.lamp_types_ten }
											lamp_stabilityes_ten={NewData.lamp_stabilityes_ten}
											tenth_deviation_one ={NewData.tenth_deviation_one}
											tenth_deviation_two ={NewData.tenth_deviation_two}
											tenth_deviation_three ={NewData.tenth_deviation_three}
											tenth_deviation_four ={NewData.tenth_deviation_four}
											tenth_deviation_five ={NewData.tenth_deviation_five}
											tenth_deviation_six ={NewData.tenth_deviation_six}
											tenth_deviation_seven ={NewData.tenth_deviation_seven}
											tenth_deviation_eight ={NewData.tenth_deviation_eight}
											tenth_deviation_nine ={NewData.tenth_deviation_nine}
											tenth_deviation_ten ={NewData.tenth_deviation_ten}
											tenth_measurement_results_one={NewData.tenth_measurement_results_one}
											tenth_measurement_results_two={NewData.tenth_measurement_results_two}
											tenth_measurement_results_three={NewData.tenth_measurement_results_three}
											tenth_measurement_results_four={NewData.tenth_measurement_results_four}
											tenth_measurement_results_five={NewData.tenth_measurement_results_five}
											tenth_measurement_results_six={NewData.tenth_measurement_results_six}
											tenth_measurement_results_seven={NewData.tenth_measurement_results_seven}
											tenth_measurement_results_eight={NewData.tenth_measurement_results_eight}
											tenth_measurement_results_nine={NewData.tenth_measurement_results_nine}
											tenth_measurement_results_ten={NewData.tenth_measurement_results_ten}
											tenth_extended_uncertaintyes_one={NewData.tenth_extended_uncertaintyes_one}
											tenth_extended_uncertaintyes_two={NewData.tenth_extended_uncertaintyes_two}
											tenth_extended_uncertaintyes_three={NewData.tenth_extended_uncertaintyes_three}
											tenth_extended_uncertaintyes_four={NewData.tenth_extended_uncertaintyes_four}
											tenth_extended_uncertaintyes_five={NewData.tenth_extended_uncertaintyes_five}
											tenth_extended_uncertaintyes_six={NewData.tenth_extended_uncertaintyes_six}
											tenth_extended_uncertaintyes_seven={NewData.tenth_extended_uncertaintyes_seven}
											tenth_extended_uncertaintyes_eight={NewData.tenth_extended_uncertaintyes_eight}
											tenth_extended_uncertaintyes_nine={NewData.tenth_extended_uncertaintyes_nine}
											tenth_extended_uncertaintyes_ten={NewData.tenth_extended_uncertaintyes_ten}
											tenth_Illum_references_one={NewData.tenth_Illum_references_one}
											tenth_Illum_references_two={NewData.tenth_Illum_references_two}
											tenth_Illum_references_three={NewData.tenth_Illum_references_three}
											tenth_Illum_references_four={NewData.tenth_Illum_references_four}
											tenth_Illum_references_five={NewData.tenth_Illum_references_five}
											tenth_Illum_references_six={NewData.tenth_Illum_references_six}
											tenth_Illum_references_seven={NewData.tenth_Illum_references_seven}
											tenth_Illum_references_eight={NewData.tenth_Illum_references_eight}
											tenth_Illum_references_nine={NewData.tenth_Illum_references_nine}
											tenth_Illum_references_ten={NewData.tenth_Illum_references_ten}
											/>}
											</div>
											</TabPanel>
											<TabPanel>
											<div
											onClick={onShowInsertEleven}
											className="btn btn-block btn-danger"
											>
											Въвеждане на данни
											</div>
											<div>
											{showInsertEleven &&
												<Eleventh
												onChange={onChange}
												lamp_types_eleven={NewData.lamp_types_eleven}
												lamp_stabilityes_eleven={NewData.lamp_stabilityes_eleven}
												eleventh_deviation_one ={NewData.eleventh_deviation_one}
												eleventh_deviation_two ={NewData.eleventh_deviation_two}
												eleventh_deviation_three ={NewData.eleventh_deviation_three}
												eleventh_deviation_four ={NewData.eleventh_deviation_four}
												eleventh_deviation_five ={NewData.eleventh_deviation_five}
												eleventh_deviation_six ={NewData.eleventh_deviation_six}
												eleventh_deviation_seven ={NewData.eleventh_deviation_seven}
												eleventh_deviation_eight ={NewData.eleventh_deviation_eight}
												eleventh_deviation_nine ={NewData.eleventh_deviation_nine}
												eleventh_deviation_ten ={NewData.eleventh_deviation_ten}
												eleventh_measurement_results_one={NewData.eleventh_measurement_results_one}
												eleventh_measurement_results_two={NewData.eleventh_measurement_results_two}
												eleventh_measurement_results_three={NewData.eleventh_measurement_results_three}
												eleventh_measurement_results_four={NewData.eleventh_measurement_results_four}
												eleventh_measurement_results_five={NewData.eleventh_measurement_results_five}
												eleventh_measurement_results_six={NewData.eleventh_measurement_results_six}
												eleventh_measurement_results_seven={NewData.eleventh_measurement_results_seven}
												eleventh_measurement_results_eight={NewData.eleventh_measurement_results_eight}
												eleventh_measurement_results_nine={NewData.eleventh_measurement_results_nine}
												eleventh_measurement_results_ten={NewData.eleventh_measurement_results_ten}
												eleventh_extended_uncertaintyes_one={NewData.eleventh_extended_uncertaintyes_one}
												eleventh_extended_uncertaintyes_two={NewData.eleventh_extended_uncertaintyes_two}
												eleventh_extended_uncertaintyes_three={NewData.eleventh_extended_uncertaintyes_three}
												eleventh_extended_uncertaintyes_four={NewData.eleventh_extended_uncertaintyes_four}
												eleventh_extended_uncertaintyes_five={NewData.eleventh_extended_uncertaintyes_five}
												eleventh_extended_uncertaintyes_six={NewData.eleventh_extended_uncertaintyes_six}
												eleventh_extended_uncertaintyes_seven={NewData.eleventh_extended_uncertaintyes_seven}
												eleventh_extended_uncertaintyes_eight={NewData.eleventh_extended_uncertaintyes_eight}
												eleventh_extended_uncertaintyes_nine={NewData.eleventh_extended_uncertaintyes_nine}
												eleventh_extended_uncertaintyes_ten={NewData.eleventh_extended_uncertaintyes_ten}
												eleventh_Illum_references_one={NewData.eleventh_Illum_references_one}
												eleventh_Illum_references_two={NewData.eleventh_Illum_references_two}
												eleventh_Illum_references_three={NewData.eleventh_Illum_references_three}
												eleventh_Illum_references_four={NewData.eleventh_Illum_references_four}
												eleventh_Illum_references_five={NewData.eleventh_Illum_references_five}
												eleventh_Illum_references_six={NewData.eleventh_Illum_references_six}
												eleventh_Illum_references_seven={NewData.eleventh_Illum_references_seven}
												eleventh_Illum_references_eight={NewData.eleventh_Illum_references_eight}
												eleventh_Illum_references_nine={NewData.eleventh_Illum_references_nine}
												eleventh_Illum_references_ten={NewData.eleventh_Illum_references_ten}
												/>}
												</div>
												</TabPanel>
												<TabPanel>
												<div
												onClick={onShowInsertTwelfth}
												className="btn btn-block btn-danger"
												>
												Въвеждане на данни
												</div>
												<div>
												{showInsertTwelfth &&
													<Twelfth
													onChange={onChange}
													lamp_types_twelve={NewData.lamp_types_twelve}
													lamp_stabilityes_twelve={NewData.lamp_stabilityes_twelve}
													twelfth_deviation_one ={NewData.twelfth_deviation_one}
													twelfth_deviation_two ={NewData.twelfth_deviation_two}
													twelfth_deviation_three ={NewData.twelfth_deviation_three}
													twelfth_deviation_four ={NewData.twelfth_deviation_four}
													twelfth_deviation_five ={NewData.twelfth_deviation_five}
													twelfth_deviation_six ={NewData.twelfth_deviation_six}
													twelfth_deviation_seven ={NewData.twelfth_deviation_seven}
													twelfth_deviation_eight ={NewData.twelfth_deviation_eight}
													twelfth_deviation_nine ={NewData.twelfth_deviation_nine}
													twelfth_deviation_ten ={NewData.twelfth_deviation_ten}
													twelfth_measurement_results_one={NewData.twelfth_measurement_results_one}
													twelfth_measurement_results_two={NewData.twelfth_measurement_results_two}
													twelfth_measurement_results_three={NewData.twelfth_measurement_results_three}
													twelfth_measurement_results_four={NewData.twelfth_measurement_results_four}
													twelfth_measurement_results_five={NewData.twelfth_measurement_results_five}
													twelfth_measurement_results_six={NewData.twelfth_measurement_results_six}
													twelfth_measurement_results_seven={NewData.twelfth_measurement_results_seven}
													twelfth_measurement_results_eight={NewData.twelfth_measurement_results_eight}
													twelfth_measurement_results_nine={NewData.twelfth_measurement_results_nine}
													twelfth_measurement_results_ten={NewData.twelfth_measurement_results_ten}
													twelfth_extended_uncertaintyes_one={NewData.twelfth_extended_uncertaintyes_one}
													twelfth_extended_uncertaintyes_two={NewData.twelfth_extended_uncertaintyes_two}
													twelfth_extended_uncertaintyes_three={NewData.twelfth_extended_uncertaintyes_three}
													twelfth_extended_uncertaintyes_four={NewData.twelfth_extended_uncertaintyes_four}
													twelfth_extended_uncertaintyes_five={NewData.twelfth_extended_uncertaintyes_five}
													twelfth_extended_uncertaintyes_six={NewData.twelfth_extended_uncertaintyes_six}
													twelfth_extended_uncertaintyes_seven={NewData.twelfth_extended_uncertaintyes_seven}
													twelfth_extended_uncertaintyes_eight={NewData.twelfth_extended_uncertaintyes_eight}
													twelfth_extended_uncertaintyes_nine={NewData.twelfth_extended_uncertaintyes_nine}
													twelfth_extended_uncertaintyes_ten={NewData.twelfth_extended_uncertaintyes_ten}
													twelfth_Illum_references_one={NewData.twelfth_Illum_references_one}
													twelfth_Illum_references_two={NewData.twelfth_Illum_references_two}
													twelfth_Illum_references_three={NewData.twelfth_Illum_references_three}
													twelfth_Illum_references_four={NewData.twelfth_Illum_references_four}
													twelfth_Illum_references_five={NewData.twelfth_Illum_references_five}
													twelfth_Illum_references_six={NewData.twelfth_Illum_references_six}
													twelfth_Illum_references_seven={NewData.twelfth_Illum_references_seven}
													twelfth_Illum_references_eight={NewData.twelfth_Illum_references_eight}
													twelfth_Illum_references_nine={NewData.twelfth_Illum_references_nine}
													twelfth_Illum_references_ten={NewData.twelfth_Illum_references_ten}
													/>}
													</div>
													</TabPanel>
													</Tabs>
													<br />
													<br />
													<br />
													<br />
													<div className="form-group">
													<button className="btn btn-block">Изпрати</button>
													</div>
													</form>
													</section>
													</div>
													);
}
export default NewCalibration;