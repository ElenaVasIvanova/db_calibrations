import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {updateCalibration, reset} from '../features/calibrations/calibrationSlice'
import Spinner from '../components/Spinner'
import {FaArrowLeft} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
function UpdateCalibration() {
  const {user} = useSelector((state) => state.auth)
  const { calibration, isLoading, message, isError} = useSelector((state) => state.calibration)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [showResultsOne, setshowResultsOne] = useState("");
  const [showResultsTwo, setshowResultsTwo] = useState("");
  const [showResultsThree, setshowResultsThree] = useState("");
  const [showResultsFour, setshowResultsFour] = useState("");
  const [showResultsFive, setshowResultsFive] = useState("");
  const [showResultsSix, setshowResultsSix] = useState("");
  const [showResultsSeven, setshowResultsSeven] = useState("");
  const [showResultsEighth, setshowResultsEighth] = useState("");
  const [showResultsNine, setshowResultsNine] = useState("");
  const [showResultsTen, setshowResultsTen] = useState("");
  const [showResultsEleven, setshowResultsEleven] = useState("");
  const [showResultsTwelve, setshowResultsTwelve] = useState("");
  const {calibrationId} = useParams()
  const [UpdateData, setUpdateData] = useState({
    device:calibration.device,
    manufacturer:calibration.manufacturer,
    type_model:calibration.type_model,
    identification:calibration.identification,
    client:calibration.client,
    application_num:calibration.application_num,
    town_village:calibration.town_village,
    quarter:calibration.quarter,
    street:calibration.street,
    number:calibration.number,
    block:calibration.block,
    еntrance:calibration.еntrance,
    floor:calibration.floor,
    apartment:calibration.apartment,
    cer_town_village:calibration.cer_town_village,
    cer_quarter:calibration.cer_quarter,
    cer_street:calibration.cer_street,
    cer_number:calibration.cer_number,
    cer_block:calibration.cer_block,
    cer_еntrance:calibration.cer_еntrance,
    cer_floor:calibration.cer_floor,
    cer_apartment:calibration.cer_apartment,
    calibration_date:calibration.calibration_date,
    number_pages:calibration.number_pages,
    performed:calibration.performed,
    num_calibration_certificate:calibration.num_calibration_certificate,
    data_calibration_certificate:calibration.data_calibration_certificate,
    calibration_method:calibration.calibration_method,
    logos:calibration.logos,
    metrological_traceabilityes:calibration.metrological_traceabilityes,
    air_temperature:calibration.air_temperature,
    air_temperature_un:calibration.air_temperature_un,
    relative_humidity:calibration.relative_humidity,
    relative_humidity_un:calibration.relative_humidity_un,
    primary_list:calibration.primary_list,
    incoming_num:calibration.incoming_num,
    price:calibration.price,
    invoice:calibration.invoice,
    mhl: { 
       mhl_deviation_one:calibration.mhl.mhl_deviation_one,
mhl_deviation_two:calibration.mhl.mhl_deviation_two,
mhl_deviation_three:calibration.mhl.mhl_deviation_three,
mhl_deviation_four:calibration.mhl.mhl_deviation_four,
mhl_deviation_five:calibration.mhl.mhl_deviation_five,
mhl_deviation_six:calibration.mhl.mhl_deviation_six,
mhl_deviation_seven:calibration.mhl.mhl_deviation_seven,
mhl_deviation_eight:calibration.mhl.mhl_deviation_eight,
mhl_deviation_nine:calibration.mhl.mhl_deviation_nine,
mhl_deviation_ten:calibration.mhl.mhl_deviation_ten,


        oneIllum_references_mhl:  calibration.mhl.oneIllum_references_mhl,
        one_measurement_results_mhl:  calibration.mhl.one_measurement_results_mhl,
        one_extended_uncertaintyes_mhl:  calibration.mhl.one_extended_uncertaintyes_mhl,
        twoIllum_references_mhl:  calibration.mhl.twoIllum_references_mhl,
        two_measurement_results_mhl:  calibration.mhl.two_measurement_results_mhl,
        two_extended_uncertaintyes_mhl:  calibration.mhl.two_extended_uncertaintyes_mhl,
        threeIllum_references_mhl:  calibration.mhl.threeIllum_references_mhl,
        three_measurement_results_mhl:  calibration.mhl.three_measurement_results_mhl,
        three_extended_uncertaintyes_mhl:  calibration.mhl.three_extended_uncertaintyes_mhl,
        fourIllum_references_mhl:  calibration.mhl.fourIllum_references_mhl,
        four_measurement_results_mhl:  calibration.mhl.four_measurement_results_mhl,
        four_extended_uncertaintyes_mhl:  calibration.mhl.four_extended_uncertaintyes_mhl,
        fiveIllum_references_mhl:  calibration.mhl.fiveIllum_references_mhl,
        five_measurement_results_mhl:  calibration.mhl.five_measurement_results_mhl,
        five_extended_uncertaintyes_mhl:  calibration.mhl.five_extended_uncertaintyes_mhl,
        sixIllum_references_mhl:  calibration.mhl.sixIllum_references_mhl,
        six_measurement_results_mhl:  calibration.mhl.six_measurement_results_mhl,
        six_extended_uncertaintyes_mhl:  calibration.mhl.six_extended_uncertaintyes_mhl,
        sevenIllum_references_mhl:  calibration.mhl.sevenIllum_references_mhl,
        seven_measurement_results_mhl:  calibration.mhl.seven_measurement_results_mhl,
        seven_extended_uncertaintyes_mhl:  calibration.mhl.seven_extended_uncertaintyes_mhl,
        eightIllum_references_mhl:  calibration.mhl.eightIllum_references_mhl,
        eight_measurement_results_mhl:  calibration.mhl.eight_measurement_results_mhl,
        eight_extended_uncertaintyes_mhl:  calibration.mhl.eight_extended_uncertaintyes_mhl,
        nineIllum_references_mhl:  calibration.mhl.nineIllum_references_mhl,
        nine_measurement_results_mhl:  calibration.mhl.nine_measurement_results_mhl,
        nine_extended_uncertaintyes_mhl:  calibration.mhl.nine_extended_uncertaintyes_mhl,
        tenIllum_references_mhl:  calibration.mhl.tenIllum_references_mhl,
        ten_measurement_results_mhl:  calibration.mhl.ten_measurement_results_mhl,
        ten_extended_uncertaintyes_mhl:  calibration.mhl.ten_extended_uncertaintyes_mhl,
        lamp_types_one: calibration.mhl.lamp_types_one,
        lamp_stability: calibration.mhl.lamp_stability,
    },
    lng:  {
        lamp_types_two:calibration.lng.lamp_types_two,
        lamp_stabilityes_two:calibration.lng.lamp_stabilityes_two,
        electricity_two:calibration.lng.electricity_two,
        lng_deviation_one:calibration.lng.lng_deviation_one,
lng_deviation_two:calibration.lng.lng_deviation_two,
lng_deviation_three:calibration.lng.lng_deviation_three,
lng_deviation_four:calibration.lng.lng_deviation_four,
lng_deviation_five:calibration.lng.lng_deviation_five,
lng_deviation_six:calibration.lng.lng_deviation_six,
lng_deviation_seven:calibration.lng.lng_deviation_seven,
lng_deviation_eight:calibration.lng.lng_deviation_eight,
lng_deviation_nine:calibration.lng.lng_deviation_nine,
lng_deviation_ten:calibration.lng.lng_deviation_ten,
        voltage_two:calibration.lng.voltage_two,
        sec_measurement_results_one_lng:calibration.lng.sec_measurement_results_one_lng,
        sec_extended_uncertaintyes_one_lng:calibration.lng.sec_extended_uncertaintyes_one_lng,
        sec_Illum_references_one_lng:calibration.lng.sec_Illum_references_one_lng,
        sec_measurement_results_two_lng:calibration.lng.sec_measurement_results_two_lng,
        sec_extended_uncertaintyes_two_lng:calibration.lng.sec_extended_uncertaintyes_two_lng,
        sec_Illum_references_two_lng:calibration.lng.sec_Illum_references_two_lng,
        sec_measurement_results_three_lng:calibration.lng.sec_measurement_results_three_lng,
        sec_extended_uncertaintyes_three_lng:calibration.lng.sec_extended_uncertaintyes_three_lng,
        sec_Illum_references_three_lng:calibration.lng.sec_Illum_references_three_lng,
        sec_measurement_results_four_lng:calibration.lng.sec_measurement_results_four_lng,
        sec_extended_uncertaintyes_four_lng:calibration.lng.sec_extended_uncertaintyes_four_lng,
        sec_Illum_references_four_lng:calibration.lng.sec_Illum_references_four_lng,
        sec_measurement_results_five_lng:calibration.lng.sec_measurement_results_five_lng,
        sec_extended_uncertaintyes_five_lng:calibration.lng.sec_extended_uncertaintyes_five_lng,
        sec_Illum_references_five_lng:calibration.lng.sec_Illum_references_five_lng,
        sec_measurement_results_six_lng:calibration.lng.sec_measurement_results_six_lng,
        sec_extended_uncertaintyes_six_lng:calibration.lng.sec_extended_uncertaintyes_six_lng,
        sec_Illum_references_six_lng:calibration.lng.sec_Illum_references_six_lng,
        sec_measurement_results_seven_lng:calibration.lng.sec_measurement_results_seven_lng,
        sec_extended_uncertaintyes_seven_lng:calibration.lng.sec_extended_uncertaintyes_seven_lng,
        sec_Illum_references_seven_lng:calibration.lng.sec_Illum_references_seven_lng,
        sec_measurement_results_eight_lng:calibration.lng.sec_measurement_results_eight_lng,
        sec_extended_uncertaintyes_eight_lng:calibration.lng.sec_extended_uncertaintyes_eight_lng,
        sec_Illum_references_eight_lng:calibration.lng.sec_Illum_references_eight_lng,
        sec_measurement_results_nine_lng:calibration.lng.sec_measurement_results_nine_lng,
        sec_extended_uncertaintyes_nine_lng:calibration.lng.sec_extended_uncertaintyes_nine_lng,
        sec_Illum_references_nine_lng:calibration.lng.sec_Illum_references_nine_lng,
        sec_measurement_results_ten_lng:calibration.lng.sec_measurement_results_ten_lng,
        sec_extended_uncertaintyes_ten_lng:calibration.lng.sec_extended_uncertaintyes_ten_lng,
        sec_Illum_references_ten_lng:calibration.lng.sec_Illum_references_ten_lng,
    },
    Ll_philips: {
        lamp_types_three :calibration.Ll_philips.lamp_types_three ,
        lamp_stabilityes_three:calibration.Ll_philips.lamp_stabilityes_three,
        third_deviation_one:calibration.Ll_philips.third_deviation_one,
third_deviation_two:calibration.Ll_philips.third_deviation_two,
third_deviation_three:calibration.Ll_philips.third_deviation_three,
third_deviation_four:calibration.Ll_philips.third_deviation_four,
third_deviation_five:calibration.Ll_philips.third_deviation_five,
third_deviation_six:calibration.Ll_philips.third_deviation_six,
third_deviation_seven:calibration.Ll_philips.third_deviation_seven,
third_deviation_eight:calibration.Ll_philips.third_deviation_eight,
third_deviation_nine:calibration.Ll_philips.third_deviation_nine,
third_deviation_ten:calibration.Ll_philips.third_deviation_ten,
        third_measurement_results_one:calibration.Ll_philips.third_measurement_results_one,
        third_measurement_results_two:calibration.Ll_philips.third_measurement_results_two,
        third_measurement_results_three:calibration.Ll_philips.third_measurement_results_three,
        third_measurement_results_four:calibration.Ll_philips.third_measurement_results_four,
        third_measurement_results_five:calibration.Ll_philips.third_measurement_results_five,
        third_measurement_results_six:calibration.Ll_philips.third_measurement_results_six,
        third_measurement_results_seven:calibration.Ll_philips.third_measurement_results_seven,
        third_measurement_results_eight:calibration.Ll_philips.third_measurement_results_eight,
        third_measurement_results_nine:calibration.Ll_philips.third_measurement_results_nine,
        third_measurement_results_ten:calibration.Ll_philips.third_measurement_results_ten,
        third_extended_uncertaintyes_one:calibration.Ll_philips.third_extended_uncertaintyes_one,
        third_extended_uncertaintyes_two:calibration.Ll_philips.third_extended_uncertaintyes_two,
        third_extended_uncertaintyes_three:calibration.Ll_philips.third_extended_uncertaintyes_three,
        third_extended_uncertaintyes_four:calibration.Ll_philips.third_extended_uncertaintyes_four,
        third_extended_uncertaintyes_five:calibration.Ll_philips.third_extended_uncertaintyes_five,
        third_extended_uncertaintyes_six:calibration.Ll_philips.third_extended_uncertaintyes_six,
        third_extended_uncertaintyes_seven:calibration.Ll_philips.third_extended_uncertaintyes_seven,
        third_extended_uncertaintyes_eight:calibration.Ll_philips.third_extended_uncertaintyes_eight,
        third_extended_uncertaintyes_nine:calibration.Ll_philips.third_extended_uncertaintyes_nine,
        third_extended_uncertaintyes_ten:calibration.Ll_philips.third_extended_uncertaintyes_ten,
        third_Illum_references_one :calibration.Ll_philips.third_Illum_references_one ,
        third_Illum_references_two :calibration.Ll_philips.third_Illum_references_two ,
        third_Illum_references_three :calibration.Ll_philips.third_Illum_references_three ,
        third_Illum_references_four :calibration.Ll_philips.third_Illum_references_four ,
        third_Illum_references_five :calibration.Ll_philips.third_Illum_references_five ,
        third_Illum_references_six :calibration.Ll_philips.third_Illum_references_six ,
        third_Illum_references_seven :calibration.Ll_philips.third_Illum_references_seven ,
        third_Illum_references_eight :calibration.Ll_philips.third_Illum_references_eight ,
        third_Illum_references_nine :calibration.Ll_philips.third_Illum_references_nine ,
        third_Illum_references_ten :calibration.Ll_philips.third_Illum_references_ten ,
    },
    A60: {
        lamp_types_four :calibration.A60.lamp_types_four ,
        lamp_stabilityes_four :calibration.A60.lamp_stabilityes_four ,
        fourth_deviation_one:calibration.A60.fourth_deviation_one,
fourth_deviation_two:calibration.A60.fourth_deviation_two,
fourth_deviation_three:calibration.A60.fourth_deviation_three,
fourth_deviation_four:calibration.A60.fourth_deviation_four,
fourth_deviation_five:calibration.A60.fourth_deviation_five,
fourth_deviation_six:calibration.A60.fourth_deviation_six,
fourth_deviation_seven:calibration.A60.fourth_deviation_seven,
fourth_deviation_eight:calibration.A60.fourth_deviation_eight,
fourth_deviation_nine:calibration.A60.fourth_deviation_nine,
fourth_deviation_ten:calibration.A60.fourth_deviation_ten,
        fourth_measurement_results_one :calibration.A60.fourth_measurement_results_one ,
        fourth_measurement_results_two :calibration.A60.fourth_measurement_results_two ,
        fourth_measurement_results_three :calibration.A60.fourth_measurement_results_three ,
        fourth_measurement_results_four :calibration.A60.fourth_measurement_results_four ,
        fourth_measurement_results_five :calibration.A60.fourth_measurement_results_five ,
        fourth_measurement_results_six :calibration.A60.fourth_measurement_results_six ,
        fourth_measurement_results_seven :calibration.A60.fourth_measurement_results_seven ,
        fourth_measurement_results_eight :calibration.A60.fourth_measurement_results_eight ,
        fourth_measurement_results_nine :calibration.A60.fourth_measurement_results_nine ,
        fourth_measurement_results_ten :calibration.A60.fourth_measurement_results_ten ,
        fourth_extended_uncertaintyes_one :calibration.A60.fourth_extended_uncertaintyes_one ,
        fourth_extended_uncertaintyes_two :calibration.A60.fourth_extended_uncertaintyes_two ,
        fourth_extended_uncertaintyes_three :calibration.A60.fourth_extended_uncertaintyes_three ,
        fourth_extended_uncertaintyes_four :calibration.A60.fourth_extended_uncertaintyes_four ,
        fourth_extended_uncertaintyes_five :calibration.A60.fourth_extended_uncertaintyes_five ,
        fourth_extended_uncertaintyes_six :calibration.A60.fourth_extended_uncertaintyes_six ,
        fourth_extended_uncertaintyes_seven :calibration.A60.fourth_extended_uncertaintyes_seven ,
        fourth_extended_uncertaintyes_eight :calibration.A60.fourth_extended_uncertaintyes_eight ,
        fourth_extended_uncertaintyes_nine :calibration.A60.fourth_extended_uncertaintyes_nine ,
        fourth_extended_uncertaintyes_ten :calibration.A60.fourth_extended_uncertaintyes_ten ,
        fourth_Illum_references_one :calibration.A60.fourth_Illum_references_one ,
        fourth_Illum_references_two :calibration.A60.fourth_Illum_references_two ,
        fourth_Illum_references_three :calibration.A60.fourth_Illum_references_three ,
        fourth_Illum_references_four :calibration.A60.fourth_Illum_references_four ,
        fourth_Illum_references_five :calibration.A60.fourth_Illum_references_five ,
        fourth_Illum_references_six :calibration.A60.fourth_Illum_references_six ,
        fourth_Illum_references_seven :calibration.A60.fourth_Illum_references_seven ,
        fourth_Illum_references_eight :calibration.A60.fourth_Illum_references_eight ,
        fourth_Illum_references_nine :calibration.A60.fourth_Illum_references_nine ,
        fourth_Illum_references_ten:calibration.A60.fourth_Illum_references_ten,
    },
    Ultra: {
        lamp_types_five:calibration.Ultra.lamp_types_five,
        lamp_stabilityes_five:calibration.Ultra.lamp_stabilityes_five,
        fifth_deviation_one:calibration.Ultra.fifth_deviation_one,
fifth_deviation_two:calibration.Ultra.fifth_deviation_two,
fifth_deviation_three:calibration.Ultra.fifth_deviation_three,
fifth_deviation_four:calibration.Ultra.fifth_deviation_four,
fifth_deviation_five:calibration.Ultra.fifth_deviation_five,
fifth_deviation_six:calibration.Ultra.fifth_deviation_six,
fifth_deviation_seven:calibration.Ultra.fifth_deviation_seven,
fifth_deviation_eight:calibration.Ultra.fifth_deviation_eight,
fifth_deviation_nine:calibration.Ultra.fifth_deviation_nine,
fifth_deviation_ten:calibration.Ultra.fifth_deviation_ten,
        fifth_measurement_results_one:calibration.Ultra.fifth_measurement_results_one,
        fifth_measurement_results_two:calibration.Ultra.fifth_measurement_results_two,
        fifth_measurement_results_three:calibration.Ultra.fifth_measurement_results_three,
        fifth_measurement_results_four:calibration.Ultra.fifth_measurement_results_four,
        fifth_measurement_results_five:calibration.Ultra.fifth_measurement_results_five,
        fifth_measurement_results_six:calibration.Ultra.fifth_measurement_results_six,
        fifth_measurement_results_seven:calibration.Ultra.fifth_measurement_results_seven,
        fifth_measurement_results_eight:calibration.Ultra.fifth_measurement_results_eight,
        fifth_measurement_results_nine:calibration.Ultra.fifth_measurement_results_nine,
        fifth_measurement_results_ten:calibration.Ultra.fifth_measurement_results_ten,
        fifth_extended_uncertaintyes_one:calibration.Ultra.fifth_extended_uncertaintyes_one,
        fifth_extended_uncertaintyes_two:calibration.Ultra.fifth_extended_uncertaintyes_two,
        fifth_extended_uncertaintyes_three:calibration.Ultra.fifth_extended_uncertaintyes_three,
        fifth_extended_uncertaintyes_four:calibration.Ultra.fifth_extended_uncertaintyes_four,
        fifth_extended_uncertaintyes_five:calibration.Ultra.fifth_extended_uncertaintyes_five,
        fifth_extended_uncertaintyes_six:calibration.Ultra.fifth_extended_uncertaintyes_six,
        fifth_extended_uncertaintyes_seven:calibration.Ultra.fifth_extended_uncertaintyes_seven,
        fifth_extended_uncertaintyes_eight:calibration.Ultra.fifth_extended_uncertaintyes_eight,
        fifth_extended_uncertaintyes_nine:calibration.Ultra.fifth_extended_uncertaintyes_nine,
        fifth_extended_uncertaintyes_ten:calibration.Ultra.fifth_extended_uncertaintyes_ten,
        fifth_Illum_references_one:calibration.Ultra.fifth_Illum_references_one,
        fifth_Illum_references_two:calibration.Ultra.fifth_Illum_references_two,
        fifth_Illum_references_three:calibration.Ultra.fifth_Illum_references_three,
        fifth_Illum_references_four:calibration.Ultra.fifth_Illum_references_four,
        fifth_Illum_references_five:calibration.Ultra.fifth_Illum_references_five,
        fifth_Illum_references_six:calibration.Ultra.fifth_Illum_references_six,
        fifth_Illum_references_seven:calibration.Ultra.fifth_Illum_references_seven,
        fifth_Illum_references_eight:calibration.Ultra.fifth_Illum_references_eight,
        fifth_Illum_references_nine:calibration.Ultra.fifth_Illum_references_nine,
        fifth_Illum_references_ten:calibration.Ultra.fifth_Illum_references_ten,
    },
    Star: {
        lamp_types_six:calibration.Star.lamp_types_six,
        lamp_stabilityes_six:calibration.Star.lamp_stabilityes_six,
        sixth_deviation_one:calibration.Star.sixth_deviation_one,
sixth_deviation_two:calibration.Star.sixth_deviation_two,
sixth_deviation_three:calibration.Star.sixth_deviation_three,
sixth_deviation_four:calibration.Star.sixth_deviation_four,
sixth_deviation_five:calibration.Star.sixth_deviation_five,
sixth_deviation_six:calibration.Star.sixth_deviation_six,
sixth_deviation_seven:calibration.Star.sixth_deviation_seven,
sixth_deviation_eight:calibration.Star.sixth_deviation_eight,
sixth_deviation_nine:calibration.Star.sixth_deviation_nine,
sixth_deviation_ten:calibration.Star.sixth_deviation_ten,
        one_measurement_results_sixth:calibration.Star.one_measurement_results_sixth,
        two_measurement_results_sixth:calibration.Star.two_measurement_results_sixth,
        three_measurement_results_sixth:calibration.Star.three_measurement_results_sixth,
        four_measurement_results_sixth:calibration.Star.four_measurement_results_sixth,
        five_measurement_results_sixth:calibration.Star.five_measurement_results_sixth,
        six_measurement_results_sixth:calibration.Star.six_measurement_results_sixth,
        seven_measurement_results_sixth:calibration.Star.seven_measurement_results_sixth,
        eight_measurement_results_sixth:calibration.Star.eight_measurement_results_sixth,
        nine_measurement_results_sixth:calibration.Star.nine_measurement_results_sixth,
        ten_measurement_results_sixth:calibration.Star.ten_measurement_results_sixth,
        one_extended_uncertaintyes_sixth:calibration.Star.one_extended_uncertaintyes_sixth,
        two_extended_uncertaintyes_sixth:calibration.Star.two_extended_uncertaintyes_sixth,
        three_extended_uncertaintyes_sixth:calibration.Star.three_extended_uncertaintyes_sixth,
        four_extended_uncertaintyes_sixth:calibration.Star.four_extended_uncertaintyes_sixth,
        five_extended_uncertaintyes_sixth:calibration.Star.five_extended_uncertaintyes_sixth,
        six_extended_uncertaintyes_sixth:calibration.Star.six_extended_uncertaintyes_sixth,
        seven_extended_uncertaintyes_sixth:calibration.Star.seven_extended_uncertaintyes_sixth,
        eight_extended_uncertaintyes_sixth:calibration.Star.eight_extended_uncertaintyes_sixth,
        nine_extended_uncertaintyes_sixth:calibration.Star.nine_extended_uncertaintyes_sixth,
        ten_extended_uncertaintyes_sixth:calibration.Star.ten_extended_uncertaintyes_sixth,
        oneIllum_references_sixth:calibration.Star.oneIllum_references_sixth,
        twoIllum_references_sixth:calibration.Star.twoIllum_references_sixth,
        threeIllum_references_sixth:calibration.Star.threeIllum_references_sixth,
        fourIllum_references_sixth:calibration.Star.fourIllum_references_sixth,
        fiveIllum_references_sixth:calibration.Star.fiveIllum_references_sixth,
        sixIllum_references_sixth:calibration.Star.sixIllum_references_sixth,
        sevenIllum_references_sixth:calibration.Star.sevenIllum_references_sixth,
        eightIllum_references_sixth:calibration.Star.eightIllum_references_sixth,
        nineIllum_references_sixth:calibration.Star.nineIllum_references_sixth,
        tenIllum_references_sixth:calibration.Star.tenIllum_references_sixth,
    },
    VT_1864: {
        lamp_types_seven:calibration.VT_1864.lamp_types_seven,
        lamp_stabilityes_seven:calibration.VT_1864.lamp_stabilityes_seven,
        seventh_deviation_one:calibration.VT_1864.seventh_deviation_one,
seventh_deviation_two:calibration.VT_1864.seventh_deviation_two,
seventh_deviation_three:calibration.VT_1864.seventh_deviation_three,
seventh_deviation_four:calibration.VT_1864.seventh_deviation_four,
seventh_deviation_five:calibration.VT_1864.seventh_deviation_five,
seventh_deviation_six:calibration.VT_1864.seventh_deviation_six,
seventh_deviation_seven:calibration.VT_1864.seventh_deviation_seven,
seventh_deviation_eight:calibration.VT_1864.seventh_deviation_eight,
seventh_deviation_nine:calibration.VT_1864.seventh_deviation_nine,
seventh_deviation_ten:calibration.VT_1864.seventh_deviation_ten,
        seventh_measurement_results_one:calibration.VT_1864.seventh_measurement_results_one,
        seventh_measurement_results_two:calibration.VT_1864.seventh_measurement_results_two,
        seventh_measurement_results_three:calibration.VT_1864.seventh_measurement_results_three,
        seventh_measurement_results_four:calibration.VT_1864.seventh_measurement_results_four,
        seventh_measurement_results_five:calibration.VT_1864.seventh_measurement_results_five,
        seventh_measurement_results_six:calibration.VT_1864.seventh_measurement_results_six,
        seventh_measurement_results_seven:calibration.VT_1864.seventh_measurement_results_seven,
        seventh_measurement_results_eight:calibration.VT_1864.seventh_measurement_results_eight,
        seventh_measurement_results_nine:calibration.VT_1864.seventh_measurement_results_nine,
        seventh_measurement_results_ten:calibration.VT_1864.seventh_measurement_results_ten,
        seventh_extended_uncertaintyes_one:calibration.VT_1864.seventh_extended_uncertaintyes_one,
        seventh_extended_uncertaintyes_two:calibration.VT_1864.seventh_extended_uncertaintyes_two,
        seventh_extended_uncertaintyes_three:calibration.VT_1864.seventh_extended_uncertaintyes_three,
        seventh_extended_uncertaintyes_four:calibration.VT_1864.seventh_extended_uncertaintyes_four,
        seventh_extended_uncertaintyes_five:calibration.VT_1864.seventh_extended_uncertaintyes_five,
        seventh_extended_uncertaintyes_six:calibration.VT_1864.seventh_extended_uncertaintyes_six,
        seventh_extended_uncertaintyes_seven:calibration.VT_1864.seventh_extended_uncertaintyes_seven,
        seventh_extended_uncertaintyes_eight:calibration.VT_1864.seventh_extended_uncertaintyes_eight,
        seventh_extended_uncertaintyes_nine:calibration.VT_1864.seventh_extended_uncertaintyes_nine,
        seventh_extended_uncertaintyes_ten:calibration.VT_1864.seventh_extended_uncertaintyes_ten,
        seventh_Illum_references_one:calibration.VT_1864.seventh_Illum_references_one,
        seventh_Illum_references_two:calibration.VT_1864.seventh_Illum_references_two,
        seventh_Illum_references_three:calibration.VT_1864.seventh_Illum_references_three,
        seventh_Illum_references_four:calibration.VT_1864.seventh_Illum_references_four,
        seventh_Illum_references_five:calibration.VT_1864.seventh_Illum_references_five,
        seventh_Illum_references_six:calibration.VT_1864.seventh_Illum_references_six,
        seventh_Illum_references_seven:calibration.VT_1864.seventh_Illum_references_seven,
        seventh_Illum_references_eight:calibration.VT_1864.seventh_Illum_references_eight,
        seventh_Illum_references_nine:calibration.VT_1864.seventh_Illum_references_nine,
        seventh_Illum_references_ten:calibration.VT_1864.seventh_Illum_references_ten,
    },
    Viva_cool: {
        lamp_types_eight:calibration.Viva_cool.lamp_types_eight,
        lamp_stabilityes_eight:calibration.Viva_cool.lamp_stabilityes_eight,
        eighth_deviation_one:calibration.Viva_cool.eighth_deviation_one,
eighth_deviation_two:calibration.Viva_cool.eighth_deviation_two,
eighth_deviation_three:calibration.Viva_cool.eighth_deviation_three,
eighth_deviation_four:calibration.Viva_cool.eighth_deviation_four,
eighth_deviation_five:calibration.Viva_cool.eighth_deviation_five,
eighth_deviation_six:calibration.Viva_cool.eighth_deviation_six,
eighth_deviation_seven:calibration.Viva_cool.eighth_deviation_seven,
eighth_deviation_eight:calibration.Viva_cool.eighth_deviation_eight,
eighth_deviation_nine:calibration.Viva_cool.eighth_deviation_nine,
eighth_deviation_ten:calibration.Viva_cool.eighth_deviation_ten,
        eighth_measurement_results_one:calibration.Viva_cool.eighth_measurement_results_one,
        eighth_measurement_results_two:calibration.Viva_cool.eighth_measurement_results_two,
        eighth_measurement_results_three:calibration.Viva_cool.eighth_measurement_results_three,
        eighth_measurement_results_four:calibration.Viva_cool.eighth_measurement_results_four,
        eighth_measurement_results_five:calibration.Viva_cool.eighth_measurement_results_five,
        eighth_measurement_results_six:calibration.Viva_cool.eighth_measurement_results_six,
        eighth_measurement_results_seven:calibration.Viva_cool.eighth_measurement_results_seven,
        eighth_measurement_results_eight:calibration.Viva_cool.eighth_measurement_results_eight,
        eighth_measurement_results_nine:calibration.Viva_cool.eighth_measurement_results_nine,
        eighth_measurement_results_ten:calibration.Viva_cool.eighth_measurement_results_ten,
        eighth_extended_uncertaintyes_one:calibration.Viva_cool.eighth_extended_uncertaintyes_one,
        eighth_extended_uncertaintyes_two:calibration.Viva_cool.eighth_extended_uncertaintyes_two,
        eighth_extended_uncertaintyes_three:calibration.Viva_cool.eighth_extended_uncertaintyes_three,
        eighth_extended_uncertaintyes_four:calibration.Viva_cool.eighth_extended_uncertaintyes_four,
        eighth_extended_uncertaintyes_five:calibration.Viva_cool.eighth_extended_uncertaintyes_five,
        eighth_extended_uncertaintyes_six:calibration.Viva_cool.eighth_extended_uncertaintyes_six,
        eighth_extended_uncertaintyes_seven:calibration.Viva_cool.eighth_extended_uncertaintyes_seven,
        eighth_extended_uncertaintyes_eight:calibration.Viva_cool.eighth_extended_uncertaintyes_eight,
        eighth_extended_uncertaintyes_nine:calibration.Viva_cool.eighth_extended_uncertaintyes_nine,
        eighth_extended_uncertaintyes_ten:calibration.Viva_cool.eighth_extended_uncertaintyes_ten,
        eighth_Illum_references_one:calibration.Viva_cool.eighth_Illum_references_one,
        eighth_Illum_references_two:calibration.Viva_cool.eighth_Illum_references_two,
        eighth_Illum_references_three:calibration.Viva_cool.eighth_Illum_references_three,
        eighth_Illum_references_four:calibration.Viva_cool.eighth_Illum_references_four,
        eighth_Illum_references_five:calibration.Viva_cool.eighth_Illum_references_five,
        eighth_Illum_references_six:calibration.Viva_cool.eighth_Illum_references_six,
        eighth_Illum_references_seven:calibration.Viva_cool.eighth_Illum_references_seven,
        eighth_Illum_references_eight:calibration.Viva_cool.eighth_Illum_references_eight,
        eighth_Illum_references_nine:calibration.Viva_cool.eighth_Illum_references_nine,
        eighth_Illum_references_ten:calibration.Viva_cool.eighth_Illum_references_ten,
    },
    Viva_warm: {
        lamp_types_nine:calibration.Viva_warm.lamp_types_nine,
        lamp_stabilityes_nine:calibration.Viva_warm.lamp_stabilityes_nine,
        ninth_deviation_one:calibration.Viva_warm.ninth_deviation_one,
ninth_deviation_two:calibration.Viva_warm.ninth_deviation_two,
ninth_deviation_three:calibration.Viva_warm.ninth_deviation_three,
ninth_deviation_four:calibration.Viva_warm.ninth_deviation_four,
ninth_deviation_five:calibration.Viva_warm.ninth_deviation_five,
ninth_deviation_six:calibration.Viva_warm.ninth_deviation_six,
ninth_deviation_seven:calibration.Viva_warm.ninth_deviation_seven,
ninth_deviation_eight:calibration.Viva_warm.ninth_deviation_eight,
ninth_deviation_nine:calibration.Viva_warm.ninth_deviation_nine,
ninth_deviation_ten:calibration.Viva_warm.ninth_deviation_ten,
        ninth_measurement_results_one:calibration.Viva_warm.ninth_measurement_results_one,
        ninth_measurement_results_two:calibration.Viva_warm.ninth_measurement_results_two,
        ninth_measurement_results_three:calibration.Viva_warm.ninth_measurement_results_three,
        ninth_measurement_results_four:calibration.Viva_warm.ninth_measurement_results_four,
        ninth_measurement_results_five:calibration.Viva_warm.ninth_measurement_results_five,
        ninth_measurement_results_six:calibration.Viva_warm.ninth_measurement_results_six,
        ninth_measurement_results_seven:calibration.Viva_warm.ninth_measurement_results_seven,
        ninth_measurement_results_eight:calibration.Viva_warm.ninth_measurement_results_eight,
        ninth_measurement_results_nine:calibration.Viva_warm.ninth_measurement_results_nine,
        ninth_measurement_results_ten:calibration.Viva_warm.ninth_measurement_results_ten,
        ninth_extended_uncertaintyes_one:calibration.Viva_warm.ninth_extended_uncertaintyes_one,
        ninth_extended_uncertaintyes_two:calibration.Viva_warm.ninth_extended_uncertaintyes_two,
        ninth_extended_uncertaintyes_three:calibration.Viva_warm.ninth_extended_uncertaintyes_three,
        ninth_extended_uncertaintyes_four:calibration.Viva_warm.ninth_extended_uncertaintyes_four,
        ninth_extended_uncertaintyes_five:calibration.Viva_warm.ninth_extended_uncertaintyes_five,
        ninth_extended_uncertaintyes_six:calibration.Viva_warm.ninth_extended_uncertaintyes_six,
        ninth_extended_uncertaintyes_seven:calibration.Viva_warm.ninth_extended_uncertaintyes_seven,
        ninth_extended_uncertaintyes_eight:calibration.Viva_warm.ninth_extended_uncertaintyes_eight,
        ninth_extended_uncertaintyes_nine:calibration.Viva_warm.ninth_extended_uncertaintyes_nine,
        ninth_extended_uncertaintyes_ten:calibration.Viva_warm.ninth_extended_uncertaintyes_ten,
        ninth_Illum_references_one:calibration.Viva_warm.ninth_Illum_references_one,
        ninth_Illum_references_two:calibration.Viva_warm.ninth_Illum_references_two,
        ninth_Illum_references_three:calibration.Viva_warm.ninth_Illum_references_three,
        ninth_Illum_references_four:calibration.Viva_warm.ninth_Illum_references_four,
        ninth_Illum_references_five:calibration.Viva_warm.ninth_Illum_references_five,
        ninth_Illum_references_six:calibration.Viva_warm.ninth_Illum_references_six,
        ninth_Illum_references_seven:calibration.Viva_warm.ninth_Illum_references_seven,
        ninth_Illum_references_eight:calibration.Viva_warm.ninth_Illum_references_eight,
        ninth_Illum_references_nine:calibration.Viva_warm.ninth_Illum_references_nine,
        ninth_Illum_references_ten:calibration.Viva_warm.ninth_Illum_references_ten,
    },
    OSRAM_6500: {
        lamp_types_ten :calibration.OSRAM_6500.lamp_types_ten ,
        lamp_stabilityes_ten:calibration.OSRAM_6500.lamp_stabilityes_ten,
        tenth_deviation_one:calibration.OSRAM_6500.tenth_deviation_one,
tenth_deviation_two:calibration.OSRAM_6500.tenth_deviation_two,
tenth_deviation_three:calibration.OSRAM_6500.tenth_deviation_three,
tenth_deviation_four:calibration.OSRAM_6500.tenth_deviation_four,
tenth_deviation_five:calibration.OSRAM_6500.tenth_deviation_five,
tenth_deviation_six:calibration.OSRAM_6500.tenth_deviation_six,
tenth_deviation_seven:calibration.OSRAM_6500.tenth_deviation_seven,
tenth_deviation_eight:calibration.OSRAM_6500.tenth_deviation_eight,
tenth_deviation_nine:calibration.OSRAM_6500.tenth_deviation_nine,
tenth_deviation_ten:calibration.OSRAM_6500.tenth_deviation_ten,
        tenth_measurement_results_one:calibration.OSRAM_6500.tenth_measurement_results_one,
        tenth_measurement_results_two:calibration.OSRAM_6500.tenth_measurement_results_two,
        tenth_measurement_results_three:calibration.OSRAM_6500.tenth_measurement_results_three,
        tenth_measurement_results_four:calibration.OSRAM_6500.tenth_measurement_results_four,
        tenth_measurement_results_five:calibration.OSRAM_6500.tenth_measurement_results_five,
        tenth_measurement_results_six:calibration.OSRAM_6500.tenth_measurement_results_six,
        tenth_measurement_results_seven:calibration.OSRAM_6500.tenth_measurement_results_seven,
        tenth_measurement_results_eight:calibration.OSRAM_6500.tenth_measurement_results_eight,
        tenth_measurement_results_nine:calibration.OSRAM_6500.tenth_measurement_results_nine,
        tenth_measurement_results_ten:calibration.OSRAM_6500.tenth_measurement_results_ten,
        tenth_extended_uncertaintyes_one:calibration.OSRAM_6500.tenth_extended_uncertaintyes_one,
        tenth_extended_uncertaintyes_two:calibration.OSRAM_6500.tenth_extended_uncertaintyes_two,
        tenth_extended_uncertaintyes_three:calibration.OSRAM_6500.tenth_extended_uncertaintyes_three,
        tenth_extended_uncertaintyes_four:calibration.OSRAM_6500.tenth_extended_uncertaintyes_four,
        tenth_extended_uncertaintyes_five:calibration.OSRAM_6500.tenth_extended_uncertaintyes_five,
        tenth_extended_uncertaintyes_six:calibration.OSRAM_6500.tenth_extended_uncertaintyes_six,
        tenth_extended_uncertaintyes_seven:calibration.OSRAM_6500.tenth_extended_uncertaintyes_seven,
        tenth_extended_uncertaintyes_eight:calibration.OSRAM_6500.tenth_extended_uncertaintyes_eight,
        tenth_extended_uncertaintyes_nine:calibration.OSRAM_6500.tenth_extended_uncertaintyes_nine,
        tenth_extended_uncertaintyes_ten:calibration.OSRAM_6500.tenth_extended_uncertaintyes_ten,
        tenth_Illum_references_one:calibration.OSRAM_6500.tenth_Illum_references_one,
        tenth_Illum_references_two:calibration.OSRAM_6500.tenth_Illum_references_two,
        tenth_Illum_references_three:calibration.OSRAM_6500.tenth_Illum_references_three,
        tenth_Illum_references_four:calibration.OSRAM_6500.tenth_Illum_references_four,
        tenth_Illum_references_five:calibration.OSRAM_6500.tenth_Illum_references_five,
        tenth_Illum_references_six:calibration.OSRAM_6500.tenth_Illum_references_six,
        tenth_Illum_references_seven:calibration.OSRAM_6500.tenth_Illum_references_seven,
        tenth_Illum_references_eight:calibration.OSRAM_6500.tenth_Illum_references_eight,
        tenth_Illum_references_nine:calibration.OSRAM_6500.tenth_Illum_references_nine,
        tenth_Illum_references_ten:calibration.OSRAM_6500.tenth_Illum_references_ten,
    },
    Ll_6500: {  
        lamp_types_eleven:calibration.Ll_6500.lamp_types_eleven ,
        lamp_stabilityes_eleven:calibration.Ll_6500.lamp_stabilityes_eleven,
        eleventh_deviation_one:calibration.Ll_6500.eleventh_deviation_one,
eleventh_deviation_two:calibration.Ll_6500.eleventh_deviation_two,
eleventh_deviation_three:calibration.Ll_6500.eleventh_deviation_three,
eleventh_deviation_four:calibration.Ll_6500.eleventh_deviation_four,
eleventh_deviation_five:calibration.Ll_6500.eleventh_deviation_five,
eleventh_deviation_six:calibration.Ll_6500.eleventh_deviation_six,
eleventh_deviation_seven:calibration.Ll_6500.eleventh_deviation_seven,
eleventh_deviation_eight:calibration.Ll_6500.eleventh_deviation_eight,
eleventh_deviation_nine:calibration.Ll_6500.eleventh_deviation_nine,
eleventh_deviation_ten:calibration.Ll_6500.eleventh_deviation_ten,
        eleventh_measurement_results_one:calibration.Ll_6500.eleventh_measurement_results_one,
        eleventh_measurement_results_two:calibration.Ll_6500.eleventh_measurement_results_two,
        eleventh_measurement_results_three:calibration.Ll_6500.eleventh_measurement_results_three,
        eleventh_measurement_results_four:calibration.Ll_6500.eleventh_measurement_results_four,
        eleventh_measurement_results_five:calibration.Ll_6500.eleventh_measurement_results_five,
        eleventh_measurement_results_six:calibration.Ll_6500.eleventh_measurement_results_six,
        eleventh_measurement_results_seven:calibration.Ll_6500.eleventh_measurement_results_seven,
        eleventh_measurement_results_eight:calibration.Ll_6500.eleventh_measurement_results_eight,
        eleventh_measurement_results_nine:calibration.Ll_6500.eleventh_measurement_results_nine,
        eleventh_measurement_results_ten:calibration.Ll_6500.eleventh_measurement_results_ten,
        eleventh_extended_uncertaintyes_one:calibration.Ll_6500.eleventh_extended_uncertaintyes_one,
        eleventh_extended_uncertaintyes_two:calibration.Ll_6500.eleventh_extended_uncertaintyes_two,
        eleventh_extended_uncertaintyes_three:calibration.Ll_6500.eleventh_extended_uncertaintyes_three,
        eleventh_extended_uncertaintyes_four:calibration.Ll_6500.eleventh_extended_uncertaintyes_four,
        eleventh_extended_uncertaintyes_five:calibration.Ll_6500.eleventh_extended_uncertaintyes_five,
        eleventh_extended_uncertaintyes_six:calibration.Ll_6500.eleventh_extended_uncertaintyes_six,
        eleventh_extended_uncertaintyes_seven:calibration.Ll_6500.eleventh_extended_uncertaintyes_seven,
        eleventh_extended_uncertaintyes_eight:calibration.Ll_6500.eleventh_extended_uncertaintyes_eight,
        eleventh_extended_uncertaintyes_nine:calibration.Ll_6500.eleventh_extended_uncertaintyes_nine,
        eleventh_extended_uncertaintyes_ten:calibration.Ll_6500.eleventh_extended_uncertaintyes_ten,
        eleventh_Illum_references_one:calibration.Ll_6500.eleventh_Illum_references_one,
        eleventh_Illum_references_two:calibration.Ll_6500.eleventh_Illum_references_two,
        eleventh_Illum_references_three:calibration.Ll_6500.eleventh_Illum_references_three,
        eleventh_Illum_references_four:calibration.Ll_6500.eleventh_Illum_references_four,
        eleventh_Illum_references_five:calibration.Ll_6500.eleventh_Illum_references_five,
        eleventh_Illum_references_six:calibration.Ll_6500.eleventh_Illum_references_six,
        eleventh_Illum_references_seven:calibration.Ll_6500.eleventh_Illum_references_seven,
        eleventh_Illum_references_eight:calibration.Ll_6500.eleventh_Illum_references_eight,
        eleventh_Illum_references_nine:calibration.Ll_6500.eleventh_Illum_references_nine,
        eleventh_Illum_references_ten:calibration.Ll_6500.eleventh_Illum_references_ten,
    },
    lng_1: {
      lamp_types_twelve:calibration.lng_1.lamp_types_twelve ,
      lamp_stabilityes_twelve:calibration.lng_1.lamp_stabilityes_twelve,
      twelfth_deviation_one:calibration.lng_1.twelfth_deviation_one,
twelfth_deviation_two:calibration.lng_1.twelfth_deviation_two,
twelfth_deviation_three:calibration.lng_1.twelfth_deviation_three,
twelfth_deviation_four:calibration.lng_1.twelfth_deviation_four,
twelfth_deviation_five:calibration.lng_1.twelfth_deviation_five,
twelfth_deviation_six:calibration.lng_1.twelfth_deviation_six,
twelfth_deviation_seven:calibration.lng_1.twelfth_deviation_seven,
twelfth_deviation_eight:calibration.lng_1.twelfth_deviation_eight,
twelfth_deviation_nine:calibration.lng_1.twelfth_deviation_nine,
twelfth_deviation_ten:calibration.lng_1.twelfth_deviation_ten,
      twelfth_measurement_results_one:calibration.lng_1.twelfth_measurement_results_one,
      twelfth_measurement_results_two:calibration.lng_1.twelfth_measurement_results_two,
      twelfth_measurement_results_three:calibration.lng_1.twelfth_measurement_results_three,
      twelfth_measurement_results_four:calibration.lng_1.twelfth_measurement_results_four,
      twelfth_measurement_results_five:calibration.lng_1.twelfth_measurement_results_five,
      twelfth_measurement_results_six:calibration.lng_1.twelfth_measurement_results_six,
      twelfth_measurement_results_seven:calibration.lng_1.twelfth_measurement_results_seven,
      twelfth_measurement_results_eight:calibration.lng_1.twelfth_measurement_results_eight,
      twelfth_measurement_results_nine:calibration.lng_1.twelfth_measurement_results_nine,
      twelfth_measurement_results_ten:calibration.lng_1.twelfth_measurement_results_ten,
      twelfth_extended_uncertaintyes_one:calibration.lng_1.twelfth_extended_uncertaintyes_one,
      twelfth_extended_uncertaintyes_two:calibration.lng_1.twelfth_extended_uncertaintyes_two,
      twelfth_extended_uncertaintyes_three:calibration.lng_1.twelfth_extended_uncertaintyes_three,
      twelfth_extended_uncertaintyes_four:calibration.lng_1.twelfth_extended_uncertaintyes_four,
      twelfth_extended_uncertaintyes_five:calibration.lng_1.twelfth_extended_uncertaintyes_five,
      twelfth_extended_uncertaintyes_six:calibration.lng_1.twelfth_extended_uncertaintyes_six,
      twelfth_extended_uncertaintyes_seven:calibration.lng_1.twelfth_extended_uncertaintyes_seven,
      twelfth_extended_uncertaintyes_eight:calibration.lng_1.twelfth_extended_uncertaintyes_eight,
      twelfth_extended_uncertaintyes_nine:calibration.lng_1.twelfth_extended_uncertaintyes_nine,
      twelfth_extended_uncertaintyes_ten:calibration.lng_1.twelfth_extended_uncertaintyes_ten,
      twelfth_Illum_references_one:calibration.lng_1.twelfth_Illum_references_one,
      twelfth_Illum_references_two:calibration.lng_1.twelfth_Illum_references_two,
      twelfth_Illum_references_three:calibration.lng_1.twelfth_Illum_references_three,
      twelfth_Illum_references_four:calibration.lng_1.twelfth_Illum_references_four,
      twelfth_Illum_references_five:calibration.lng_1.twelfth_Illum_references_five,
      twelfth_Illum_references_six:calibration.lng_1.twelfth_Illum_references_six,
      twelfth_Illum_references_seven:calibration.lng_1.twelfth_Illum_references_seven,
      twelfth_Illum_references_eight:calibration.lng_1.twelfth_Illum_references_eight,
      twelfth_Illum_references_nine:calibration.lng_1.twelfth_Illum_references_nine,
      twelfth_Illum_references_ten:calibration.lng_1.twelfth_Illum_references_ten,
  }
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
  mhl: { 
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
} = UpdateData;
const dispatch = useDispatch()
const navigate = useNavigate()
useEffect(() => {
  if(isError){
    toast.error(message)
    dispatch(reset())
}
}, [ isError, navigate, message])
if(isLoading){
  return <Spinner />
}
const onSubmit = (e) => {
  e.preventDefault()
  dispatch(updateCalibration({UpdateData, calibrationId}))
  toast.success("Калибрирането е редактирано");
};
const update_onChange = (e) => {
  setUpdateData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
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
}));
};
const onShowResultsOne = () => {
    setshowResultsOne(!showResultsOne) 
};
const onShowResultsTwo = () => {
    setshowResultsTwo(!showResultsTwo) 
};
const onShowResultsThree = () => {
    setshowResultsThree(!showResultsThree) 
};
const onShowResultsFour = () => {
    setshowResultsFour(!showResultsFour) 
};
const onShowResultsFive = () => {
    setshowResultsFive(!showResultsFive) 
};
const onShowResultsSix = () => {
    setshowResultsSix(!showResultsSix) 
};
const onShowResultsSeven = () => {
    setshowResultsSeven(!showResultsSeven) 
};
const onShowResultsEighth = () => {
    setshowResultsEighth(!showResultsEighth) 
};
const onShowResultsNine = () => {
    setshowResultsNine(!showResultsNine) 
};
const onShowResultsTen = () => {
    setshowResultsTen(!showResultsTen) 
};
const onShowResultsEleven = () => {
    setshowResultsEleven(!showResultsEleven) 
};
const onShowResultsTwelve = () => {
    setshowResultsTwelve(!showResultsTwelve) 
};
return (
  <div >
  <button className="btn btn-reverse" onClick={() => navigate(-1)}><FaArrowLeft /> Назад</button>
  <section className="heading">
  <h1>Редактирай калибриране</h1>
  <p>Моля попълнете формата</p>
  </section>
  <section >
  <div className="form-writer">
  <div className="form-group">
  <label htmlFor="name">Въвел - име</label>
  <input  type='text' className='form-control' value={name} disabled />
  </div>
  <div className="form-group">
  <label htmlFor="email">Въвел - email</label>
  <input type='text' className='form-control' value={email} disabled />
  </div>
  </div>
  <form onSubmit={onSubmit}>
  <h3>Данни за калибрирането</h3>
  <div className="form" >
  <div className="form-group">
  <label htmlFor="device">Средство за измерване:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={device} name='device' id='device' />
  </div>
  <div className="form-group">
  <label htmlFor="manufacturer">Производител:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={manufacturer} name='manufacturer' id='manufacturer' />
  </div>
  <div className="form-group">
  <label htmlFor="type_model">Тип/Модел:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={type_model} name='type_model' id='type_model' />
  </div>
  <div className="form-group">
  <label htmlFor="identification">Идентификационен №:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={identification} name='identification' id='identification' />
  </div>
  <div className="form-group">
  <label htmlFor="client">Клиент:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={client} name='client' id='client' />
  </div>
  <div className="form-group">
  <label htmlFor="application_num">Заявка №:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={application_num} name='application_num' id='application_num' />
  </div>
  </div> 
  <h3>Адрес на клиента</h3>
  <div className="form">
  <div className="form-group">
  <label htmlFor="town_village">Град/Село:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={town_village} name='town_village' id='town_village' />
  </div>
  <div className="form-group">
  <label htmlFor="quarter">Квартал:</label>
  <input type='text' className='form-control' value={quarter} name='quarter' id='quarter' onChange={update_onChange} />
  </div>
  <div className="form-group">
  <label htmlFor="street">Улица:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={street} name='street' id='street' />
  </div>
  <div className="form-group">
  <label htmlFor="number">№:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={number} name='number' id='number' />
  </div>
  <div className="form-group">
  <label htmlFor="block">Блок:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={block} name='block' id='block' />
  </div>
  <div className="form-group">
  <label htmlFor="еntrance">Вход:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={еntrance} name='еntrance' id='еntrance' />
  </div>
  <div className="form-group">
  <label htmlFor="floor">Етаж:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={floor} name='floor' id='floor' />
  </div>
  <div className="form-group">
  <label htmlFor="apartment">Апартамент:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={apartment} name='apartment' id='apartment' />
  </div>
  </div>
  <h3>Адрес за сертификата</h3>
  <div className="form">
  <div className="form-group">
  <label htmlFor="cer_town_village">Град/Село:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={cer_town_village} name='cer_town_village' id='cer_town_village' />
  </div>
  <div className="form-group">
  <label htmlFor="cer_quarter">Квартал:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={cer_quarter} name='cer_quarter' id='cer_quarter' />
  </div>
  <div className="form-group">
  <label htmlFor="cer_street">Улица:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={cer_street} name='cer_street' id='cer_street' />
  </div>
  <div className="form-group">
  <label htmlFor="cer_number">№:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={cer_number} name='cer_number' id='cer_number' />
  </div>
  <div className="form-group">
  <label htmlFor="cer_block">Блок:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={cer_block} name='cer_block' id='cer_block' />
  </div>
  <div className="form-group">
  <label htmlFor="cer_еntrance">Вход:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={cer_еntrance} name='cer_еntrance' id='cer_еntrance' />
  </div>
  <div className="form-group">
  <label htmlFor="cer_floor">Етаж:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={cer_floor} name='cer_floor' id='cer_floor' />
  </div>
  <div className="form-group">
  <label htmlFor="cer_apartment">Апартамент:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={cer_apartment} name='cer_apartment' id='cer_apartment' />
  </div>
  </div>
  <div className="form">
  <div className="form-group">
  <label htmlFor="num_calibration_certificate">№ на СК:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={num_calibration_certificate} name='num_calibration_certificate' id='num_calibration_certificate' />
  </div>
  <div className="form-group">
  <label htmlFor="data_calibration_certificate">Дата на издаване:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={data_calibration_certificate} name='data_calibration_certificate' id='data_calibration_certificate' />
  </div>
  <div className="form-group">
  <label htmlFor="number_pages">Брой страници:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={number_pages} name='number_pages' id='number_pages' />
  </div>
  <div className="form-group">
  <label htmlFor="primary_list">Първичен протокол №:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={primary_list} name='primary_list' id='primary_list' />
  </div>
  <div className="form-group">
  <label htmlFor="calibration_date">Дата на калибриране:</label>
  <input type='date' className='form-control' onChange={update_onChange} value={calibration_date} name='calibration_date' id='calibration_date' />
  </div>
  <div className="form-group">
  <label htmlFor="incoming_num">№ от входящ дневник:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={incoming_num} name='incoming_num' id='incoming_num' />
  </div>
  <div className="form-group">
  <label htmlFor="price">Сума за калибриране:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={price} name='price' id='price' />
  </div>
  <div className="form-group">
  <label htmlFor="invoice">№ на фактура:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={invoice} name='invoice' id='invoice' />
  </div>
  </div>
  <h4 >Извършил калибрирането:</h4>
  <div>
  <div id="check_radio">
  <label > <input
  name='performed'
  type="checkbox"
  value="началник отдел: Николай Александров"
  checked={performed === "началник отдел: Николай Александров"}
  onChange={update_onChange}
  />&nbsp;&nbsp;началник отдел: Николай Александров</label> 
  </div>
  <div id="check_radio">
  <label ><input
  name='performed' 
  type="checkbox"
  value="главен експерт: Елица Петрова"
  checked={performed === "главен експерт: Елица Петрова"}
  onChange={update_onChange}
  />&nbsp;&nbsp;главен експерт: Елица Петрова</label>
  </div>     
  <div id="check_radio">
  <label> <input
  name='performed'
  type="checkbox"
  value="главен експерт: Елена Иванова"
  checked={performed === "главен експерт: Елена Иванова"}
  onChange={update_onChange}
  />&nbsp;&nbsp;главен експерт: Елена Иванова</label> 
  </div>  
  </div>
  <h4>Метод (методика) на калибриране:</h4>
  <div>
  <div id="check_radio">
  <label><input
  name='calibration_method'
  type="radio"
  value='Методика за калибриране на луксметри с код ОАВ-ОИ-МК-18-lx'
  checked={calibration_method ==='Методика за калибриране на луксметри с код ОАВ-ОИ-МК-18-lx'}
  onChange={update_onChange}
  />&nbsp;&nbsp;Методика за калибриране на луксметри с код ОАВ-ОИ-МК-18-lx</label> 
  </div>
  <div id="check_radio">
  <label><input
  name='calibration_method'
  type="radio"
  value='Друг - различен от ОАВ-ОИ-МК-18-lx'
  checked={calibration_method ==='Друг - различен от ОАВ-ОИ-МК-18-lx'}
  onChange={update_onChange}
  />&nbsp;&nbsp;Друг - различен от ОАВ-ОИ-МК-18-lx </label>
  </div>
  </div>
  <h4>Лого</h4>
  <div>
  <div id="check_radio">
  <label><input
  name='logos'
  type="radio"
  value='Сертификат с лого на Споразумението за взаимно признаване (MRA) на Международния комитет по мерки и теглилки (CIPM)'
  checked={logos ==='Сертификат с лого на Споразумението за взаимно признаване (MRA) на Международния комитет по мерки и теглилки (CIPM)'}
  onChange={update_onChange}
  />&nbsp;&nbsp;Сертификат с лого на Споразумението за взаимно признаване (MRA) на Международния комитет по мерки и теглилки (CIPM)</label>
  </div>
  <div id="check_radio">
  <label><input
  name='logos'
  type="radio"
  value="Не"
  checked={logos === "Не"}
  onChange={update_onChange}
  />&nbsp;&nbsp;Не</label> 
  </div>
  </div>
  <h4>Метрологична проследимост</h4>
  <div >
  <div id="check_radio">
  <label>
  <input
  name='metrological_traceabilityes'
  type="checkbox"
  value="Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ."
  checked={metrological_traceabilityes ==="Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ."}
  onChange={update_onChange}
  />&nbsp;&nbsp;Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ.
  </label>
  </div>
  <div id="check_radio">
  <label><input
  name='metrological_traceabilityes'
  type="checkbox"
  value="Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ. Измервател на фототок I1000 с идентификационен №0692041, свидетелство за калибриране №060-ЕМИ/27.06.2019/ГД НЦМ."
  checked={metrological_traceabilityes === "Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ. Измервател на фототок I1000 с идентификационен №0692041, свидетелство за калибриране №060-ЕМИ/27.06.2019/ГД НЦМ."}
  onChange={update_onChange}
  />&nbsp;&nbsp;Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ. Измервател на фототок I1000 с идентификационен №0692041, свидетелство за калибриране №060-ЕМИ/27.06.2019/ГД НЦМ. 
  </label>
  </div>
  </div>
  <h4>Условия при които е извършено калибрирането</h4>
  <div className="form">
  <div className="form-group">
  <label htmlFor="air_temperature">Температура на въздуха &#x2103;:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={air_temperature} 
  name='air_temperature' id='air_temperature' />
  </div>
  <div className="form-group">
  <label htmlFor="air_temperature_un">Температура на въздуха &#x2103; ±:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={air_temperature_un} 
  name='air_temperature_un' id='air_temperature_un' />
  </div> 
  <div className="form-group">
  <label htmlFor="relative_humidity">Влажност на въздуха %:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={relative_humidity} 
  name='relative_humidity' id='relative_humidity' />
  </div>
  <div className="form-group">
  <label htmlFor="relative_humidity_un">Влажност % ±:</label>
  <input type='text' className='form-control' onChange={update_onChange} value={relative_humidity_un} 
  name='relative_humidity_un' id='relative_humidity_un' />
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
  onClick={onShowResultsOne}
  className="btn btn-block btn-danger"
  >
  Металхалогенна лампа - редактиране
  </div>
  <div>
  {showResultsOne && 
    <First
    onChange={update_onChange}
    lamp_types_one={UpdateData.mhl.lamp_types_one}
    lamp_stability={UpdateData.mhl.lamp_stability}
    mhl_deviation_one ={UpdateData.mhl.mhl_deviation_one}
mhl_deviation_two ={UpdateData.mhl.mhl_deviation_two}
mhl_deviation_three ={UpdateData.mhl.mhl_deviation_three}
mhl_deviation_four ={UpdateData.mhl.mhl_deviation_four}
mhl_deviation_five ={UpdateData.mhl.mhl_deviation_five}
mhl_deviation_six ={UpdateData.mhl.mhl_deviation_six}
mhl_deviation_seven ={UpdateData.mhl.mhl_deviation_seven}
mhl_deviation_eight ={UpdateData.mhl.mhl_deviation_eight}
mhl_deviation_nine ={UpdateData.mhl.mhl_deviation_nine}
mhl_deviation_ten ={UpdateData.mhl.mhl_deviation_ten}
    oneIllum_references_mhl={UpdateData.mhl.oneIllum_references_mhl}
    one_measurement_results_mhl={UpdateData.mhl.one_measurement_results_mhl}
    one_extended_uncertaintyes_mhl={UpdateData.mhl.one_extended_uncertaintyes_mhl}
    twoIllum_references_mhl={UpdateData.mhl.twoIllum_references_mhl}
    two_measurement_results_mhl={UpdateData.mhl.two_measurement_results_mhl}
    two_extended_uncertaintyes_mhl={UpdateData.mhl.two_extended_uncertaintyes_mhl}
    threeIllum_references_mhl={UpdateData.mhl.threeIllum_references_mhl}
    three_measurement_results_mhl={UpdateData.mhl.three_measurement_results_mhl}
    three_extended_uncertaintyes_mhl={UpdateData.mhl.three_extended_uncertaintyes_mhl}
    fourIllum_references_mhl={UpdateData.mhl.fourIllum_references_mhl}
    four_measurement_results_mhl={UpdateData.mhl.four_measurement_results_mhl}
    four_extended_uncertaintyes_mhl={UpdateData.mhl.four_extended_uncertaintyes_mhl}
    fiveIllum_references_mhl={UpdateData.mhl.fiveIllum_references_mhl}
    five_measurement_results_mhl={UpdateData.mhl.five_measurement_results_mhl}
    five_extended_uncertaintyes_mhl={UpdateData.mhl.five_extended_uncertaintyes_mhl}
    sixIllum_references_mhl={UpdateData.mhl.sixIllum_references_mhl}
    six_measurement_results_mhl={UpdateData.mhl.six_measurement_results_mhl}
    six_extended_uncertaintyes_mhl={UpdateData.mhl.six_extended_uncertaintyes_mhl}
    sevenIllum_references_mhl={UpdateData.mhl.sevenIllum_references_mhl}
    seven_measurement_results_mhl={UpdateData.mhl.seven_measurement_results_mhl}
    seven_extended_uncertaintyes_mhl={UpdateData.mhl.seven_extended_uncertaintyes_mhl}
    eightIllum_references_mhl={UpdateData.mhl.eightIllum_references_mhl}
    eight_measurement_results_mhl={UpdateData.mhl.eight_measurement_results_mhl}
    eight_extended_uncertaintyes_mhl={UpdateData.mhl.eight_extended_uncertaintyes_mhl}
    nineIllum_references_mhl={UpdateData.mhl.nineIllum_references_mhl}
    nine_measurement_results_mhl={UpdateData.mhl.nine_measurement_results_mhl}
    nine_extended_uncertaintyes_mhl={UpdateData.mhl.nine_extended_uncertaintyes_mhl}
    tenIllum_references_mhl={UpdateData.mhl.tenIllum_references_mhl}
    ten_measurement_results_mhl={UpdateData.mhl.ten_measurement_results_mhl}
    ten_extended_uncertaintyes_mhl={UpdateData.mhl.ten_extended_uncertaintyes_mhl}
    />}
    </div>  
    </TabPanel>
    <TabPanel>
    <div
    onClick={onShowResultsTwo}
    className="btn btn-block btn-danger"
    >
    Лампа с нажежаема жичка - редактиране
    </div>
    <div>
    {showResultsTwo && 
        <Second
        onChange={update_onChange}
        lamp_types_two={UpdateData.lng.lamp_types_two}
        lamp_stabilityes_two={UpdateData.lng.lamp_stabilityes_two}
        electricity_two={UpdateData.lng.electricity_two}
        voltage_two={UpdateData.lng.voltage_two}
        lng_deviation_one ={UpdateData.lng.lng_deviation_one}
lng_deviation_two ={UpdateData.lng.lng_deviation_two}
lng_deviation_three ={UpdateData.lng.lng_deviation_three}
lng_deviation_four ={UpdateData.lng.lng_deviation_four}
lng_deviation_five ={UpdateData.lng.lng_deviation_five}
lng_deviation_six ={UpdateData.lng.lng_deviation_six}
lng_deviation_seven ={UpdateData.lng.lng_deviation_seven}
lng_deviation_eight ={UpdateData.lng.lng_deviation_eight}
lng_deviation_nine ={UpdateData.lng.lng_deviation_nine}
lng_deviation_ten ={UpdateData.lng.lng_deviation_ten}
        sec_measurement_results_one_lng ={UpdateData.lng.sec_measurement_results_one_lng}
        sec_extended_uncertaintyes_one_lng ={UpdateData.lng.sec_extended_uncertaintyes_one_lng }
        sec_Illum_references_one_lng ={UpdateData.lng.sec_Illum_references_one_lng }
        sec_measurement_results_two_lng ={UpdateData.lng.sec_measurement_results_two_lng }
        sec_extended_uncertaintyes_two_lng={UpdateData.lng.sec_extended_uncertaintyes_two_lng }
        sec_Illum_references_two_lng={UpdateData.lng.sec_Illum_references_two_lng }
        sec_measurement_results_three_lng={UpdateData.lng.sec_measurement_results_three_lng }
        sec_extended_uncertaintyes_three_lng ={UpdateData.lng.sec_extended_uncertaintyes_three_lng }
        sec_Illum_references_three_lng={UpdateData.lng.sec_Illum_references_three_lng }
        sec_measurement_results_four_lng={UpdateData.lng.sec_measurement_results_four_lng }
        sec_extended_uncertaintyes_four_lng ={UpdateData.lng.sec_extended_uncertaintyes_four_lng }
        sec_Illum_references_four_lng={UpdateData.lng.sec_Illum_references_four_lng }
        sec_measurement_results_five_lng={UpdateData.lng.sec_measurement_results_five_lng }
        sec_extended_uncertaintyes_five_lng ={UpdateData.lng.sec_extended_uncertaintyes_five_lng }
        sec_Illum_references_five_lng={UpdateData.lng.sec_Illum_references_five_lng }
        sec_measurement_results_six_lng ={UpdateData.lng.sec_measurement_results_six_lng }
        sec_extended_uncertaintyes_six_lng ={UpdateData.lng.sec_extended_uncertaintyes_six_lng }
        sec_Illum_references_six_lng ={UpdateData.lng.sec_Illum_references_six_lng }
        sec_measurement_results_seven_lng={UpdateData.lng.sec_measurement_results_seven_lng }
        sec_extended_uncertaintyes_seven_lng={UpdateData.lng.sec_extended_uncertaintyes_seven_lng }
        sec_Illum_references_seven_lng={UpdateData.lng.sec_Illum_references_seven_lng }
        sec_measurement_results_eight_lng ={UpdateData.lng.sec_measurement_results_eight_lng }
        sec_extended_uncertaintyes_eight_lng ={UpdateData.lng.sec_extended_uncertaintyes_eight_lng }
        sec_Illum_references_eight_lng ={UpdateData.lng.sec_Illum_references_eight_lng }
        sec_measurement_results_nine_lng ={UpdateData.lng.sec_measurement_results_nine_lng }
        sec_extended_uncertaintyes_nine_lng ={UpdateData.lng.sec_extended_uncertaintyes_nine_lng }
        sec_Illum_references_nine_lng ={UpdateData.lng.sec_Illum_references_nine_lng }
        sec_measurement_results_ten_lng ={UpdateData.lng.sec_measurement_results_ten_lng }
        sec_extended_uncertaintyes_ten_lng={UpdateData.lng.sec_extended_uncertaintyes_ten_lng}
        sec_Illum_references_ten_lng={UpdateData.lng.sec_Illum_references_ten_lng }
        />}
        </div>
        </TabPanel>
        <TabPanel>
        <div
        onClick={onShowResultsThree}
        className="btn btn-block btn-danger"
        >
        Philips - Луминисцентна лампа/6500K - редактиране
        </div>
        <div>
        {showResultsThree && 
          <Third
          onChange={update_onChange}
          lamp_types_three={UpdateData.Ll_philips.lamp_types_three} 
          lamp_stabilityes_three={UpdateData.Ll_philips.lamp_stabilityes_three}
          third_deviation_one ={UpdateData.Ll_philips.third_deviation_one}
third_deviation_two ={UpdateData.Ll_philips.third_deviation_two}
third_deviation_three ={UpdateData.Ll_philips.third_deviation_three}
third_deviation_four ={UpdateData.Ll_philips.third_deviation_four}
third_deviation_five ={UpdateData.Ll_philips.third_deviation_five}
third_deviation_six ={UpdateData.Ll_philips.third_deviation_six}
third_deviation_seven ={UpdateData.Ll_philips.third_deviation_seven}
third_deviation_eight ={UpdateData.Ll_philips.third_deviation_eight}
third_deviation_nine ={UpdateData.Ll_philips.third_deviation_nine}
third_deviation_ten ={UpdateData.Ll_philips.third_deviation_ten}
          third_measurement_results_one={UpdateData.Ll_philips.third_measurement_results_one} 
          third_measurement_results_two={UpdateData.Ll_philips.third_measurement_results_two}
          third_measurement_results_three={UpdateData.Ll_philips.third_measurement_results_three}
          third_measurement_results_four={UpdateData.Ll_philips.third_measurement_results_four}
          third_measurement_results_five={UpdateData.Ll_philips.third_measurement_results_five}
          third_measurement_results_six={UpdateData.Ll_philips.third_measurement_results_six}
          third_measurement_results_seven={UpdateData.Ll_philips.third_measurement_results_seven}
          third_measurement_results_eight={UpdateData.Ll_philips.third_measurement_results_eight}
          third_measurement_results_nine={UpdateData.Ll_philips.third_measurement_results_nine}
          third_measurement_results_ten={UpdateData.Ll_philips.third_measurement_results_ten}
          third_extended_uncertaintyes_one={UpdateData.Ll_philips.third_extended_uncertaintyes_one}
          third_extended_uncertaintyes_two={UpdateData.Ll_philips.third_extended_uncertaintyes_two}
          third_extended_uncertaintyes_three={UpdateData.Ll_philips.third_extended_uncertaintyes_three}
          third_extended_uncertaintyes_four={UpdateData.Ll_philips.third_extended_uncertaintyes_four}
          third_extended_uncertaintyes_five={UpdateData.Ll_philips.third_extended_uncertaintyes_five}
          third_extended_uncertaintyes_six={UpdateData.Ll_philips.third_extended_uncertaintyes_six}
          third_extended_uncertaintyes_seven={UpdateData.Ll_philips.third_extended_uncertaintyes_seven}
          third_extended_uncertaintyes_eight={UpdateData.Ll_philips.third_extended_uncertaintyes_eight}
          third_extended_uncertaintyes_nine={UpdateData.Ll_philips.third_extended_uncertaintyes_nine}
          third_extended_uncertaintyes_ten={UpdateData.Ll_philips.third_extended_uncertaintyes_ten}
          third_Illum_references_one={UpdateData.Ll_philips.third_Illum_references_one}
          third_Illum_references_two={UpdateData.Ll_philips.third_Illum_references_two}
          third_Illum_references_three={UpdateData.Ll_philips.third_Illum_references_three}
          third_Illum_references_four={UpdateData.Ll_philips.third_Illum_references_four}
          third_Illum_references_five={UpdateData.Ll_philips.third_Illum_references_five}
          third_Illum_references_six={UpdateData.Ll_philips.third_Illum_references_six}
          third_Illum_references_seven={UpdateData.Ll_philips.third_Illum_references_seven}
          third_Illum_references_eight={UpdateData.Ll_philips.third_Illum_references_eight}
          third_Illum_references_nine={UpdateData.Ll_philips.third_Illum_references_nine}
          third_Illum_references_ten={UpdateData.Ll_philips.third_Illum_references_ten}
          />}
          </div> 
          </TabPanel>
          <TabPanel>
          <div
          onClick={onShowResultsFour}
          className="btn btn-block btn-danger"
          >
          Parathom classic A60/2700K warm white - редактиране
          </div>
          <div>
          {showResultsFour && 
              <Fourth
              onChange={update_onChange} 
              lamp_types_four ={UpdateData.A60.lamp_types_four }
              lamp_stabilityes_four ={UpdateData.A60.lamp_stabilityes_four }
              fourth_deviation_one ={UpdateData.A60.fourth_deviation_one}
fourth_deviation_two ={UpdateData.A60.fourth_deviation_two}
fourth_deviation_three ={UpdateData.A60.fourth_deviation_three}
fourth_deviation_four ={UpdateData.A60.fourth_deviation_four}
fourth_deviation_five ={UpdateData.A60.fourth_deviation_five}
fourth_deviation_six ={UpdateData.A60.fourth_deviation_six}
fourth_deviation_seven ={UpdateData.A60.fourth_deviation_seven}
fourth_deviation_eight ={UpdateData.A60.fourth_deviation_eight}
fourth_deviation_nine ={UpdateData.A60.fourth_deviation_nine}
fourth_deviation_ten ={UpdateData.A60.fourth_deviation_ten}
              fourth_measurement_results_one ={UpdateData.A60.fourth_measurement_results_one }
              fourth_measurement_results_two ={UpdateData.A60.fourth_measurement_results_two }
              fourth_measurement_results_three ={UpdateData.A60.fourth_measurement_results_three }
              fourth_measurement_results_four ={UpdateData.A60.fourth_measurement_results_four }
              fourth_measurement_results_five ={UpdateData.A60.fourth_measurement_results_five }
              fourth_measurement_results_six ={UpdateData.A60.fourth_measurement_results_six }
              fourth_measurement_results_seven ={UpdateData.A60.fourth_measurement_results_seven }
              fourth_measurement_results_eight ={UpdateData.A60.fourth_measurement_results_eight }
              fourth_measurement_results_nine ={UpdateData.A60.fourth_measurement_results_nine }
              fourth_measurement_results_ten ={UpdateData.A60.fourth_measurement_results_ten }
              fourth_extended_uncertaintyes_one ={UpdateData.A60.fourth_extended_uncertaintyes_one }
              fourth_extended_uncertaintyes_two ={UpdateData.A60.fourth_extended_uncertaintyes_two }
              fourth_extended_uncertaintyes_three ={UpdateData.A60.fourth_extended_uncertaintyes_three }
              fourth_extended_uncertaintyes_four ={UpdateData.A60.fourth_extended_uncertaintyes_four }
              fourth_extended_uncertaintyes_five ={UpdateData.A60.fourth_extended_uncertaintyes_five }
              fourth_extended_uncertaintyes_six ={UpdateData.A60.fourth_extended_uncertaintyes_six }
              fourth_extended_uncertaintyes_seven ={UpdateData.A60.fourth_extended_uncertaintyes_seven }
              fourth_extended_uncertaintyes_eight ={UpdateData.A60.fourth_extended_uncertaintyes_eight }
              fourth_extended_uncertaintyes_nine ={UpdateData.A60.fourth_extended_uncertaintyes_nine }
              fourth_extended_uncertaintyes_ten ={UpdateData.A60.fourth_extended_uncertaintyes_ten }
              fourth_Illum_references_one ={UpdateData.A60.fourth_Illum_references_one }
              fourth_Illum_references_two ={UpdateData.A60.fourth_Illum_references_two }
              fourth_Illum_references_three ={UpdateData.A60.fourth_Illum_references_three }
              fourth_Illum_references_four ={UpdateData.A60.fourth_Illum_references_four }
              fourth_Illum_references_five ={UpdateData.A60.fourth_Illum_references_five }
              fourth_Illum_references_six ={UpdateData.A60.fourth_Illum_references_six }
              fourth_Illum_references_seven ={UpdateData.A60.fourth_Illum_references_seven }
              fourth_Illum_references_eight ={UpdateData.A60.fourth_Illum_references_eight }
              fourth_Illum_references_nine ={UpdateData.A60.fourth_Illum_references_nine }
              fourth_Illum_references_ten ={UpdateData.A60.fourth_Illum_references_ten }
              />}
              </div> 
              </TabPanel>
              <TabPanel>
              <div
              onClick={onShowResultsFive}
              className="btn btn-block btn-danger"
              >
              Ultralux/2700K warm white - редактиране
              </div>
              <div>
              {showResultsFive && 
                  <Fifth
                  onChange={update_onChange}
                  lamp_types_five={UpdateData.Ultra.lamp_types_five}
                  lamp_stabilityes_five={UpdateData.Ultra.lamp_stabilityes_five}
                  fifth_deviation_one ={UpdateData.Ultra.fifth_deviation_one}
fifth_deviation_two ={UpdateData.Ultra.fifth_deviation_two}
fifth_deviation_three ={UpdateData.Ultra.fifth_deviation_three}
fifth_deviation_four ={UpdateData.Ultra.fifth_deviation_four}
fifth_deviation_five ={UpdateData.Ultra.fifth_deviation_five}
fifth_deviation_six ={UpdateData.Ultra.fifth_deviation_six}
fifth_deviation_seven ={UpdateData.Ultra.fifth_deviation_seven}
fifth_deviation_eight ={UpdateData.Ultra.fifth_deviation_eight}
fifth_deviation_nine ={UpdateData.Ultra.fifth_deviation_nine}
fifth_deviation_ten ={UpdateData.Ultra.fifth_deviation_ten}
                  fifth_measurement_results_one={UpdateData.Ultra.fifth_measurement_results_one}
                  fifth_measurement_results_two={UpdateData.Ultra.fifth_measurement_results_two}
                  fifth_measurement_results_three={UpdateData.Ultra.fifth_measurement_results_three}
                  fifth_measurement_results_four={UpdateData.Ultra.fifth_measurement_results_four}
                  fifth_measurement_results_five={UpdateData.Ultra.fifth_measurement_results_five}
                  fifth_measurement_results_six={UpdateData.Ultra.fifth_measurement_results_six}
                  fifth_measurement_results_seven={UpdateData.Ultra.fifth_measurement_results_seven}
                  fifth_measurement_results_eight={UpdateData.Ultra.fifth_measurement_results_eight}
                  fifth_measurement_results_nine={UpdateData.Ultra.fifth_measurement_results_nine}
                  fifth_measurement_results_ten={UpdateData.Ultra.fifth_measurement_results_ten}
                  fifth_extended_uncertaintyes_one={UpdateData.Ultra.fifth_extended_uncertaintyes_one}
                  fifth_extended_uncertaintyes_two={UpdateData.Ultra.fifth_extended_uncertaintyes_two}
                  fifth_extended_uncertaintyes_three={UpdateData.Ultra.fifth_extended_uncertaintyes_three}
                  fifth_extended_uncertaintyes_four={UpdateData.Ultra.fifth_extended_uncertaintyes_four}
                  fifth_extended_uncertaintyes_five={UpdateData.Ultra.fifth_extended_uncertaintyes_five}
                  fifth_extended_uncertaintyes_six={UpdateData.Ultra.fifth_extended_uncertaintyes_six}
                  fifth_extended_uncertaintyes_seven={UpdateData.Ultra.fifth_extended_uncertaintyes_seven}
                  fifth_extended_uncertaintyes_eight={UpdateData.Ultra.fifth_extended_uncertaintyes_eight}
                  fifth_extended_uncertaintyes_nine={UpdateData.Ultra.fifth_extended_uncertaintyes_nine}
                  fifth_extended_uncertaintyes_ten={UpdateData.Ultra.fifth_extended_uncertaintyes_ten}
                  fifth_Illum_references_one={UpdateData.Ultra.fifth_Illum_references_one}
                  fifth_Illum_references_two={UpdateData.Ultra.fifth_Illum_references_two}
                  fifth_Illum_references_three={UpdateData.Ultra.fifth_Illum_references_three}
                  fifth_Illum_references_four={UpdateData.Ultra.fifth_Illum_references_four}
                  fifth_Illum_references_five={UpdateData.Ultra.fifth_Illum_references_five}
                  fifth_Illum_references_six={UpdateData.Ultra.fifth_Illum_references_six}
                  fifth_Illum_references_seven={UpdateData.Ultra.fifth_Illum_references_seven}
                  fifth_Illum_references_eight={UpdateData.Ultra.fifth_Illum_references_eight}
                  fifth_Illum_references_nine={UpdateData.Ultra.fifth_Illum_references_nine}
                  fifth_Illum_references_ten={UpdateData.Ultra.fifth_Illum_references_ten}
                  />}
                  </div> 
                  </TabPanel>
                  <TabPanel>
                  <div
                  onClick={onShowResultsSix}
                  className="btn btn-block btn-danger"
                  >
                  Star classic А25/3000K - редактиране
                  </div>
                  <div>
                  {showResultsSix && 
                      <Sixth
                      onChange={update_onChange}
                      lamp_types_six={UpdateData.Star.lamp_types_six}
                      lamp_stabilityes_six={UpdateData.Star.lamp_stabilityes_six}
sixth_deviation_one ={UpdateData.Star.sixth_deviation_one}
sixth_deviation_two ={UpdateData.Star.sixth_deviation_two}
sixth_deviation_three ={UpdateData.Star.sixth_deviation_three}
sixth_deviation_four ={UpdateData.Star.sixth_deviation_four}
sixth_deviation_five ={UpdateData.Star.sixth_deviation_five}
sixth_deviation_six ={UpdateData.Star.sixth_deviation_six}
sixth_deviation_seven ={UpdateData.Star.sixth_deviation_seven}
sixth_deviation_eight ={UpdateData.Star.sixth_deviation_eight}
sixth_deviation_nine ={UpdateData.Star.sixth_deviation_nine}
sixth_deviation_ten ={UpdateData.Star.sixth_deviation_ten}                  
                      one_measurement_results_sixth={UpdateData.Star.one_measurement_results_sixth}
                      two_measurement_results_sixth={UpdateData.Star.two_measurement_results_sixth}
                      three_measurement_results_sixth={UpdateData.Star.three_measurement_results_sixth}
                      four_measurement_results_sixth={UpdateData.Star.four_measurement_results_sixth}
                      five_measurement_results_sixth={UpdateData.Star.five_measurement_results_sixth}
                      six_measurement_results_sixth={UpdateData.Star.six_measurement_results_sixth}
                      seven_measurement_results_sixth={UpdateData.Star.seven_measurement_results_sixth}
                      eight_measurement_results_sixth={UpdateData.Star.eight_measurement_results_sixth}
                      nine_measurement_results_sixth={UpdateData.Star.nine_measurement_results_sixth}
                      ten_measurement_results_sixth={UpdateData.Star.ten_measurement_results_sixth}
                      one_extended_uncertaintyes_sixth={UpdateData.Star.one_extended_uncertaintyes_sixth}
                      two_extended_uncertaintyes_sixth={UpdateData.Star.two_extended_uncertaintyes_sixth}
                      three_extended_uncertaintyes_sixth={UpdateData.Star.three_extended_uncertaintyes_sixth}
                      four_extended_uncertaintyes_sixth={UpdateData.Star.four_extended_uncertaintyes_sixth}
                      five_extended_uncertaintyes_sixth={UpdateData.Star.five_extended_uncertaintyes_sixth}
                      six_extended_uncertaintyes_sixth={UpdateData.Star.six_extended_uncertaintyes_sixth}
                      seven_extended_uncertaintyes_sixth={UpdateData.Star.seven_extended_uncertaintyes_sixth}
                      eight_extended_uncertaintyes_sixth={UpdateData.Star.eight_extended_uncertaintyes_sixth}
                      nine_extended_uncertaintyes_sixth={UpdateData.Star.nine_extended_uncertaintyes_sixth}
                      ten_extended_uncertaintyes_sixth={UpdateData.Star.ten_extended_uncertaintyes_sixth}
                      oneIllum_references_sixth={UpdateData.Star.oneIllum_references_sixth}
                      twoIllum_references_sixth={UpdateData.Star.twoIllum_references_sixth}
                      threeIllum_references_sixth={UpdateData.Star.threeIllum_references_sixth}
                      fourIllum_references_sixth={UpdateData.Star.fourIllum_references_sixth}
                      fiveIllum_references_sixth={UpdateData.Star.fiveIllum_references_sixth}
                      sixIllum_references_sixth={UpdateData.Star.sixIllum_references_sixth}
                      sevenIllum_references_sixth={UpdateData.Star.sevenIllum_references_sixth}
                      eightIllum_references_sixth={UpdateData.Star.eightIllum_references_sixth}
                      nineIllum_references_sixth={UpdateData.Star.nineIllum_references_sixth}
                      tenIllum_references_sixth={UpdateData.Star.tenIllum_references_sixth}
                      />}
                      </div> 
                      </TabPanel>
                      <TabPanel>
                      <div
                      onClick={onShowResultsSeven}
                      className="btn btn-block btn-danger"
                      >
                      VT-1864/4500K - редактиране
                      </div>
                      <div>
                      {showResultsSeven && 
                          <Seventh
                          onChange={update_onChange}
                          lamp_types_seven={UpdateData.VT_1864.lamp_types_seven}
                          lamp_stabilityes_seven={UpdateData.VT_1864.lamp_stabilityes_seven}
                          seventh_deviation_one ={UpdateData.VT_1864.seventh_deviation_one}
seventh_deviation_two ={UpdateData.VT_1864.seventh_deviation_two}
seventh_deviation_three ={UpdateData.VT_1864.seventh_deviation_three}
seventh_deviation_four ={UpdateData.VT_1864.seventh_deviation_four}
seventh_deviation_five ={UpdateData.VT_1864.seventh_deviation_five}
seventh_deviation_six ={UpdateData.VT_1864.seventh_deviation_six}
seventh_deviation_seven ={UpdateData.VT_1864.seventh_deviation_seven}
seventh_deviation_eight ={UpdateData.VT_1864.seventh_deviation_eight}
seventh_deviation_nine ={UpdateData.VT_1864.seventh_deviation_nine}
seventh_deviation_ten ={UpdateData.VT_1864.seventh_deviation_ten}
                          seventh_measurement_results_one={UpdateData.VT_1864.seventh_measurement_results_one}
                          seventh_measurement_results_two={UpdateData.VT_1864.seventh_measurement_results_two}
                          seventh_measurement_results_three={UpdateData.VT_1864.seventh_measurement_results_three}
                          seventh_measurement_results_four={UpdateData.VT_1864.seventh_measurement_results_four}
                          seventh_measurement_results_five={UpdateData.VT_1864.seventh_measurement_results_five}
                          seventh_measurement_results_six={UpdateData.VT_1864.seventh_measurement_results_six}
                          seventh_measurement_results_seven={UpdateData.VT_1864.seventh_measurement_results_seven}
                          seventh_measurement_results_eight={UpdateData.VT_1864.seventh_measurement_results_eight}
                          seventh_measurement_results_nine={UpdateData.VT_1864.seventh_measurement_results_nine}
                          seventh_measurement_results_ten={UpdateData.VT_1864.seventh_measurement_results_ten}
                          seventh_extended_uncertaintyes_one={UpdateData.VT_1864.seventh_extended_uncertaintyes_one}
                          seventh_extended_uncertaintyes_two={UpdateData.VT_1864.seventh_extended_uncertaintyes_two}
                          seventh_extended_uncertaintyes_three={UpdateData.VT_1864.seventh_extended_uncertaintyes_three}
                          seventh_extended_uncertaintyes_four={UpdateData.VT_1864.seventh_extended_uncertaintyes_four}
                          seventh_extended_uncertaintyes_five={UpdateData.VT_1864.seventh_extended_uncertaintyes_five}
                          seventh_extended_uncertaintyes_six={UpdateData.VT_1864.seventh_extended_uncertaintyes_six}
                          seventh_extended_uncertaintyes_seven={UpdateData.VT_1864.seventh_extended_uncertaintyes_seven}
                          seventh_extended_uncertaintyes_eight={UpdateData.VT_1864.seventh_extended_uncertaintyes_eight}
                          seventh_extended_uncertaintyes_nine={UpdateData.VT_1864.seventh_extended_uncertaintyes_nine}
                          seventh_extended_uncertaintyes_ten={UpdateData.VT_1864.seventh_extended_uncertaintyes_ten}
                          seventh_Illum_references_one={UpdateData.VT_1864.seventh_Illum_references_one}
                          seventh_Illum_references_two={UpdateData.VT_1864.seventh_Illum_references_two}
                          seventh_Illum_references_three={UpdateData.VT_1864.seventh_Illum_references_three}
                          seventh_Illum_references_four={UpdateData.VT_1864.seventh_Illum_references_four}
                          seventh_Illum_references_five={UpdateData.VT_1864.seventh_Illum_references_five}
                          seventh_Illum_references_six={UpdateData.VT_1864.seventh_Illum_references_six}
                          seventh_Illum_references_seven={UpdateData.VT_1864.seventh_Illum_references_seven}
                          seventh_Illum_references_eight={UpdateData.VT_1864.seventh_Illum_references_eight}
                          seventh_Illum_references_nine={UpdateData.VT_1864.seventh_Illum_references_nine}
                          seventh_Illum_references_ten={UpdateData.VT_1864.seventh_Illum_references_ten}
                          />}
                          </div>
                          </TabPanel>
                          <TabPanel>
                          <div
                          onClick={onShowResultsEighth}
                          className="btn btn-block btn-danger"
                          >
                          VIVALUX/Viva/6400K cool white - редактиране
                          </div>
                          <div>
                          {showResultsEighth && 
                              <Eighth
                              onChange={update_onChange}
                              lamp_types_eight={UpdateData.Viva_cool.lamp_types_eight}
                              lamp_stabilityes_eight={UpdateData.Viva_cool.lamp_stabilityes_eight}
eighth_deviation_one ={UpdateData.Viva_cool.eighth_deviation_one}
eighth_deviation_two ={UpdateData.Viva_cool.eighth_deviation_two}
eighth_deviation_three ={UpdateData.Viva_cool.eighth_deviation_three}
eighth_deviation_four ={UpdateData.Viva_cool.eighth_deviation_four}
eighth_deviation_five ={UpdateData.Viva_cool.eighth_deviation_five}
eighth_deviation_six ={UpdateData.Viva_cool.eighth_deviation_six}
eighth_deviation_seven ={UpdateData.Viva_cool.eighth_deviation_seven}
eighth_deviation_eight ={UpdateData.Viva_cool.eighth_deviation_eight}
eighth_deviation_nine ={UpdateData.Viva_cool.eighth_deviation_nine}
eighth_deviation_ten ={UpdateData.Viva_cool.eighth_deviation_ten}                              
                              eighth_measurement_results_one={UpdateData.Viva_cool.eighth_measurement_results_one}
                              eighth_measurement_results_two={UpdateData.Viva_cool.eighth_measurement_results_two}
                              eighth_measurement_results_three={UpdateData.Viva_cool.eighth_measurement_results_three}
                              eighth_measurement_results_four={UpdateData.Viva_cool.eighth_measurement_results_four}
                              eighth_measurement_results_five={UpdateData.Viva_cool.eighth_measurement_results_five}
                              eighth_measurement_results_six={UpdateData.Viva_cool.eighth_measurement_results_six}
                              eighth_measurement_results_seven={UpdateData.Viva_cool.eighth_measurement_results_seven}
                              eighth_measurement_results_eight={UpdateData.Viva_cool.eighth_measurement_results_eight}
                              eighth_measurement_results_nine={UpdateData.Viva_cool.eighth_measurement_results_nine}
                              eighth_measurement_results_ten={UpdateData.Viva_cool.eighth_measurement_results_ten}
                              eighth_extended_uncertaintyes_one={UpdateData.Viva_cool.eighth_extended_uncertaintyes_one}
                              eighth_extended_uncertaintyes_two={UpdateData.Viva_cool.eighth_extended_uncertaintyes_two}
                              eighth_extended_uncertaintyes_three={UpdateData.Viva_cool.eighth_extended_uncertaintyes_three}
                              eighth_extended_uncertaintyes_four={UpdateData.Viva_cool.eighth_extended_uncertaintyes_four}
                              eighth_extended_uncertaintyes_five={UpdateData.Viva_cool.eighth_extended_uncertaintyes_five}
                              eighth_extended_uncertaintyes_six={UpdateData.Viva_cool.eighth_extended_uncertaintyes_six}
                              eighth_extended_uncertaintyes_seven={UpdateData.Viva_cool.eighth_extended_uncertaintyes_seven}
                              eighth_extended_uncertaintyes_eight={UpdateData.Viva_cool.eighth_extended_uncertaintyes_eight}
                              eighth_extended_uncertaintyes_nine={UpdateData.Viva_cool.eighth_extended_uncertaintyes_nine}
                              eighth_extended_uncertaintyes_ten={UpdateData.Viva_cool.eighth_extended_uncertaintyes_ten}
                              eighth_Illum_references_one={UpdateData.Viva_cool.eighth_Illum_references_one}
                              eighth_Illum_references_two={UpdateData.Viva_cool.eighth_Illum_references_two}
                              eighth_Illum_references_three={UpdateData.Viva_cool.eighth_Illum_references_three}
                              eighth_Illum_references_four={UpdateData.Viva_cool.eighth_Illum_references_four}
                              eighth_Illum_references_five={UpdateData.Viva_cool.eighth_Illum_references_five}
                              eighth_Illum_references_six={UpdateData.Viva_cool.eighth_Illum_references_six}
                              eighth_Illum_references_seven={UpdateData.Viva_cool.eighth_Illum_references_seven}
                              eighth_Illum_references_eight={UpdateData.Viva_cool.eighth_Illum_references_eight}
                              eighth_Illum_references_nine={UpdateData.Viva_cool.eighth_Illum_references_nine}
                              eighth_Illum_references_ten={UpdateData.Viva_cool.eighth_Illum_references_ten}
                              />}
                              </div>
                              </TabPanel>
                              <TabPanel>
                              <div
                              onClick={onShowResultsNine}
                              className="btn btn-block btn-danger"
                              >
                              VIVALUX/Viva/6400K warm white - редактиране
                              </div>
                              <div>
                              {showResultsNine && 
                                  <Ninth
                                  onChange={update_onChange}
                                  lamp_types_nine={UpdateData.Viva_warm.lamp_types_nine}
                                  lamp_stabilityes_nine={UpdateData.Viva_warm.lamp_stabilityes_nine}
                                  ninth_deviation_one ={UpdateData.Viva_warm.ninth_deviation_one}
ninth_deviation_two ={UpdateData.Viva_warm.ninth_deviation_two}
ninth_deviation_three ={UpdateData.Viva_warm.ninth_deviation_three}
ninth_deviation_four ={UpdateData.Viva_warm.ninth_deviation_four}
ninth_deviation_five ={UpdateData.Viva_warm.ninth_deviation_five}
ninth_deviation_six ={UpdateData.Viva_warm.ninth_deviation_six}
ninth_deviation_seven ={UpdateData.Viva_warm.ninth_deviation_seven}
ninth_deviation_eight ={UpdateData.Viva_warm.ninth_deviation_eight}
ninth_deviation_nine ={UpdateData.Viva_warm.ninth_deviation_nine}
ninth_deviation_ten ={UpdateData.Viva_warm.ninth_deviation_ten}
                                  ninth_measurement_results_one={UpdateData.Viva_warm.ninth_measurement_results_one}
                                  ninth_measurement_results_two={UpdateData.Viva_warm.ninth_measurement_results_two}
                                  ninth_measurement_results_three={UpdateData.Viva_warm.ninth_measurement_results_three}
                                  ninth_measurement_results_four={UpdateData.Viva_warm.ninth_measurement_results_four}
                                  ninth_measurement_results_five={UpdateData.Viva_warm.ninth_measurement_results_five}
                                  ninth_measurement_results_six={UpdateData.Viva_warm.ninth_measurement_results_six}
                                  ninth_measurement_results_seven={UpdateData.Viva_warm.ninth_measurement_results_seven}
                                  ninth_measurement_results_eight={UpdateData.Viva_warm.ninth_measurement_results_eight}
                                  ninth_measurement_results_nine={UpdateData.Viva_warm.ninth_measurement_results_nine}
                                  ninth_measurement_results_ten={UpdateData.Viva_warm.ninth_measurement_results_ten}
                                  ninth_extended_uncertaintyes_one={UpdateData.Viva_warm.ninth_extended_uncertaintyes_one}
                                  ninth_extended_uncertaintyes_two={UpdateData.Viva_warm.ninth_extended_uncertaintyes_two}
                                  ninth_extended_uncertaintyes_three={UpdateData.Viva_warm.ninth_extended_uncertaintyes_three}
                                  ninth_extended_uncertaintyes_four={UpdateData.Viva_warm.ninth_extended_uncertaintyes_four}
                                  ninth_extended_uncertaintyes_five={UpdateData.Viva_warm.ninth_extended_uncertaintyes_five}
                                  ninth_extended_uncertaintyes_six={UpdateData.Viva_warm.ninth_extended_uncertaintyes_six}
                                  ninth_extended_uncertaintyes_seven={UpdateData.Viva_warm.ninth_extended_uncertaintyes_seven}
                                  ninth_extended_uncertaintyes_eight={UpdateData.Viva_warm.ninth_extended_uncertaintyes_eight}
                                  ninth_extended_uncertaintyes_nine={UpdateData.Viva_warm.ninth_extended_uncertaintyes_nine}
                                  ninth_extended_uncertaintyes_ten={UpdateData.Viva_warm.ninth_extended_uncertaintyes_ten}
                                  ninth_Illum_references_one={UpdateData.Viva_warm.ninth_Illum_references_one}
                                  ninth_Illum_references_two={UpdateData.Viva_warm.ninth_Illum_references_two}
                                  ninth_Illum_references_three={UpdateData.Viva_warm.ninth_Illum_references_three}
                                  ninth_Illum_references_four={UpdateData.Viva_warm.ninth_Illum_references_four}
                                  ninth_Illum_references_five={UpdateData.Viva_warm.ninth_Illum_references_five}
                                  ninth_Illum_references_six={UpdateData.Viva_warm.ninth_Illum_references_six}
                                  ninth_Illum_references_seven={UpdateData.Viva_warm.ninth_Illum_references_seven}
                                  ninth_Illum_references_eight={UpdateData.Viva_warm.ninth_Illum_references_eight}
                                  ninth_Illum_references_nine={UpdateData.Viva_warm.ninth_Illum_references_nine}
                                  ninth_Illum_references_ten  ={UpdateData.Viva_warm.ninth_Illum_references_ten  }
                                  />}
                                  </div> 
                                  </TabPanel>
                                  <TabPanel>
                                  <div
                                  onClick={onShowResultsTen}
                                  className="btn btn-block btn-danger"
                                  >
                                  OSRAM-Германия/6500K daylight - редактиране
                                  </div>
                                  <div>
                                  {showResultsTen && 
                                      <Tenth
                                      onChange={update_onChange}
                                      lamp_types_ten={UpdateData.OSRAM_6500.lamp_types_ten }
                                      lamp_stabilityes_ten={UpdateData.OSRAM_6500.lamp_stabilityes_ten}
                                      tenth_deviation_one ={UpdateData.OSRAM_6500.tenth_deviation_one}
tenth_deviation_two ={UpdateData.OSRAM_6500.tenth_deviation_two}
tenth_deviation_three ={UpdateData.OSRAM_6500.tenth_deviation_three}
tenth_deviation_four ={UpdateData.OSRAM_6500.tenth_deviation_four}
tenth_deviation_five ={UpdateData.OSRAM_6500.tenth_deviation_five}
tenth_deviation_six ={UpdateData.OSRAM_6500.tenth_deviation_six}
tenth_deviation_seven ={UpdateData.OSRAM_6500.tenth_deviation_seven}
tenth_deviation_eight ={UpdateData.OSRAM_6500.tenth_deviation_eight}
tenth_deviation_nine ={UpdateData.OSRAM_6500.tenth_deviation_nine}
tenth_deviation_ten ={UpdateData.OSRAM_6500.tenth_deviation_ten}
                                      tenth_measurement_results_one={UpdateData.OSRAM_6500.tenth_measurement_results_one}
                                      tenth_measurement_results_two={UpdateData.OSRAM_6500.tenth_measurement_results_two}
                                      tenth_measurement_results_three={UpdateData.OSRAM_6500.tenth_measurement_results_three}
                                      tenth_measurement_results_four={UpdateData.OSRAM_6500.tenth_measurement_results_four}
                                      tenth_measurement_results_five={UpdateData.OSRAM_6500.tenth_measurement_results_five}
                                      tenth_measurement_results_six={UpdateData.OSRAM_6500.tenth_measurement_results_six}
                                      tenth_measurement_results_seven={UpdateData.OSRAM_6500.tenth_measurement_results_seven}
                                      tenth_measurement_results_eight={UpdateData.OSRAM_6500.tenth_measurement_results_eight}
                                      tenth_measurement_results_nine={UpdateData.OSRAM_6500.tenth_measurement_results_nine}
                                      tenth_measurement_results_ten={UpdateData.OSRAM_6500.tenth_measurement_results_ten}
                                      tenth_extended_uncertaintyes_one={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_one}
                                      tenth_extended_uncertaintyes_two={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_two}
                                      tenth_extended_uncertaintyes_three={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_three}
                                      tenth_extended_uncertaintyes_four={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_four}
                                      tenth_extended_uncertaintyes_five={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_five}
                                      tenth_extended_uncertaintyes_six={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_six}
                                      tenth_extended_uncertaintyes_seven={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_seven}
                                      tenth_extended_uncertaintyes_eight={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_eight}
                                      tenth_extended_uncertaintyes_nine={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_nine}
                                      tenth_extended_uncertaintyes_ten={UpdateData.OSRAM_6500.tenth_extended_uncertaintyes_ten}
                                      tenth_Illum_references_one={UpdateData.OSRAM_6500.tenth_Illum_references_one}
                                      tenth_Illum_references_two={UpdateData.OSRAM_6500.tenth_Illum_references_two}
                                      tenth_Illum_references_three={UpdateData.OSRAM_6500.tenth_Illum_references_three}
                                      tenth_Illum_references_four={UpdateData.OSRAM_6500.tenth_Illum_references_four}
                                      tenth_Illum_references_five={UpdateData.OSRAM_6500.tenth_Illum_references_five}
                                      tenth_Illum_references_six={UpdateData.OSRAM_6500.tenth_Illum_references_six}
                                      tenth_Illum_references_seven={UpdateData.OSRAM_6500.tenth_Illum_references_seven}
                                      tenth_Illum_references_eight={UpdateData.OSRAM_6500.tenth_Illum_references_eight}
                                      tenth_Illum_references_nine={UpdateData.OSRAM_6500.tenth_Illum_references_nine}
                                      tenth_Illum_references_ten={UpdateData.OSRAM_6500.tenth_Illum_references_ten}
                                      />}
                                      </div> 
                                      </TabPanel>
                                      <TabPanel>
                                      <div
                                      onClick={onShowResultsEleven}
                                      className="btn btn-block btn-danger"
                                      >
                                      Luminescent lamp/6500K - редактиране
                                      </div>
                                      <div>
                                      {showResultsEleven && 
                                          <Eleventh
                                          onChange={update_onChange}
                                          lamp_types_eleven={UpdateData.Ll_6500.lamp_types_eleven }
                                          lamp_stabilityes_eleven={UpdateData.Ll_6500.lamp_stabilityes_eleven}
                                          eleventh_deviation_one ={UpdateData.Ll_6500.eleventh_deviation_one}
eleventh_deviation_two ={UpdateData.Ll_6500.eleventh_deviation_two}
eleventh_deviation_three ={UpdateData.Ll_6500.eleventh_deviation_three}
eleventh_deviation_four ={UpdateData.Ll_6500.eleventh_deviation_four}
eleventh_deviation_five ={UpdateData.Ll_6500.eleventh_deviation_five}
eleventh_deviation_six ={UpdateData.Ll_6500.eleventh_deviation_six}
eleventh_deviation_seven ={UpdateData.Ll_6500.eleventh_deviation_seven}
eleventh_deviation_eight ={UpdateData.Ll_6500.eleventh_deviation_eight}
eleventh_deviation_nine ={UpdateData.Ll_6500.eleventh_deviation_nine}
eleventh_deviation_ten ={UpdateData.Ll_6500.eleventh_deviation_ten}
                                          eleventh_measurement_results_one={UpdateData.Ll_6500.eleventh_measurement_results_one}
                                          eleventh_measurement_results_two={UpdateData.Ll_6500.eleventh_measurement_results_two}
                                          eleventh_measurement_results_three={UpdateData.Ll_6500.eleventh_measurement_results_three}
                                          eleventh_measurement_results_four={UpdateData.Ll_6500.eleventh_measurement_results_four}
                                          eleventh_measurement_results_five={UpdateData.Ll_6500.eleventh_measurement_results_five}
                                          eleventh_measurement_results_six={UpdateData.Ll_6500.eleventh_measurement_results_six}
                                          eleventh_measurement_results_seven={UpdateData.Ll_6500.eleventh_measurement_results_seven}
                                          eleventh_measurement_results_eight={UpdateData.Ll_6500.eleventh_measurement_results_eight}
                                          eleventh_measurement_results_nine={UpdateData.Ll_6500.eleventh_measurement_results_nine}
                                          eleventh_measurement_results_ten={UpdateData.Ll_6500.eleventh_measurement_results_ten}
                                          eleventh_extended_uncertaintyes_one={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_one}
                                          eleventh_extended_uncertaintyes_two={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_two}
                                          eleventh_extended_uncertaintyes_three={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_three}
                                          eleventh_extended_uncertaintyes_four={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_four}
                                          eleventh_extended_uncertaintyes_five={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_five}
                                          eleventh_extended_uncertaintyes_six={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_six}
                                          eleventh_extended_uncertaintyes_seven={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_seven}
                                          eleventh_extended_uncertaintyes_eight={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_eight}
                                          eleventh_extended_uncertaintyes_nine={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_nine}
                                          eleventh_extended_uncertaintyes_ten={UpdateData.Ll_6500.eleventh_extended_uncertaintyes_ten}
                                          eleventh_Illum_references_one={UpdateData.Ll_6500.eleventh_Illum_references_one}
                                          eleventh_Illum_references_two={UpdateData.Ll_6500.eleventh_Illum_references_two}
                                          eleventh_Illum_references_three={UpdateData.Ll_6500.eleventh_Illum_references_three}
                                          eleventh_Illum_references_four={UpdateData.Ll_6500.eleventh_Illum_references_four}
                                          eleventh_Illum_references_five={UpdateData.Ll_6500.eleventh_Illum_references_five}
                                          eleventh_Illum_references_six={UpdateData.Ll_6500.eleventh_Illum_references_six}
                                          eleventh_Illum_references_seven={UpdateData.Ll_6500.eleventh_Illum_references_seven}
                                          eleventh_Illum_references_eight={UpdateData.Ll_6500.eleventh_Illum_references_eight}
                                          eleventh_Illum_references_nine={UpdateData.Ll_6500.eleventh_Illum_references_nine}
                                          eleventh_Illum_references_ten={UpdateData.Ll_6500.eleventh_Illum_references_ten}
                                          />}
                                          </div>
                                          </TabPanel>
                                          <TabPanel>
                                          <div
                                          onClick={onShowResultsTwelve}
                                          className="btn btn-block btn-danger"
                                          >
                                          Лампа с нажежаема жичка - l lux/2800K - редактиране
                                          </div>
                                          <div>
                                          {showResultsTwelve && 
                                              <Twelfth
                                              onChange={update_onChange}
                                              lamp_types_twelve={UpdateData.lng_1.lamp_types_twelve }
                                              lamp_stabilityes_twelve={UpdateData.lng_1.lamp_stabilityes_twelve}
                                              twelfth_deviation_one ={UpdateData.lng_1.twelfth_deviation_one}
twelfth_deviation_two ={UpdateData.lng_1.twelfth_deviation_two}
twelfth_deviation_three ={UpdateData.lng_1.twelfth_deviation_three}
twelfth_deviation_four ={UpdateData.lng_1.twelfth_deviation_four}
twelfth_deviation_five ={UpdateData.lng_1.twelfth_deviation_five}
twelfth_deviation_six ={UpdateData.lng_1.twelfth_deviation_six}
twelfth_deviation_seven ={UpdateData.lng_1.twelfth_deviation_seven}
twelfth_deviation_eight ={UpdateData.lng_1.twelfth_deviation_eight}
twelfth_deviation_nine ={UpdateData.lng_1.twelfth_deviation_nine}
twelfth_deviation_ten ={UpdateData.lng_1.twelfth_deviation_ten}
                                              twelfth_measurement_results_one={UpdateData.lng_1.twelfth_measurement_results_one}
                                              twelfth_measurement_results_two={UpdateData.lng_1.twelfth_measurement_results_two}
                                              twelfth_measurement_results_three={UpdateData.lng_1.twelfth_measurement_results_three}
                                              twelfth_measurement_results_four={UpdateData.lng_1.twelfth_measurement_results_four}
                                              twelfth_measurement_results_five={UpdateData.lng_1.twelfth_measurement_results_five}
                                              twelfth_measurement_results_six={UpdateData.lng_1.twelfth_measurement_results_six}
                                              twelfth_measurement_results_seven={UpdateData.lng_1.twelfth_measurement_results_seven}
                                              twelfth_measurement_results_eight={UpdateData.lng_1.twelfth_measurement_results_eight}
                                              twelfth_measurement_results_nine={UpdateData.lng_1.twelfth_measurement_results_nine}
                                              twelfth_measurement_results_ten={UpdateData.lng_1.twelfth_measurement_results_ten}
                                              twelfth_extended_uncertaintyes_one={UpdateData.lng_1.twelfth_extended_uncertaintyes_one}
                                              twelfth_extended_uncertaintyes_two={UpdateData.lng_1.twelfth_extended_uncertaintyes_two}
                                              twelfth_extended_uncertaintyes_three={UpdateData.lng_1.twelfth_extended_uncertaintyes_three}
                                              twelfth_extended_uncertaintyes_four={UpdateData.lng_1.twelfth_extended_uncertaintyes_four}
                                              twelfth_extended_uncertaintyes_five={UpdateData.lng_1.twelfth_extended_uncertaintyes_five}
                                              twelfth_extended_uncertaintyes_six={UpdateData.lng_1.twelfth_extended_uncertaintyes_six}
                                              twelfth_extended_uncertaintyes_seven={UpdateData.lng_1.twelfth_extended_uncertaintyes_seven}
                                              twelfth_extended_uncertaintyes_eight={UpdateData.lng_1.twelfth_extended_uncertaintyes_eight}
                                              twelfth_extended_uncertaintyes_nine={UpdateData.lng_1.twelfth_extended_uncertaintyes_nine}
                                              twelfth_extended_uncertaintyes_ten={UpdateData.lng_1.twelfth_extended_uncertaintyes_ten}
                                              twelfth_Illum_references_one={UpdateData.lng_1.twelfth_Illum_references_one}
                                              twelfth_Illum_references_two={UpdateData.lng_1.twelfth_Illum_references_two}
                                              twelfth_Illum_references_three={UpdateData.lng_1.twelfth_Illum_references_three}
                                              twelfth_Illum_references_four={UpdateData.lng_1.twelfth_Illum_references_four}
                                              twelfth_Illum_references_five={UpdateData.lng_1.twelfth_Illum_references_five}
                                              twelfth_Illum_references_six={UpdateData.lng_1.twelfth_Illum_references_six}
                                              twelfth_Illum_references_seven={UpdateData.lng_1.twelfth_Illum_references_seven}
                                              twelfth_Illum_references_eight={UpdateData.lng_1.twelfth_Illum_references_eight}
                                              twelfth_Illum_references_nine={UpdateData.lng_1.twelfth_Illum_references_nine}
                                              twelfth_Illum_references_ten={UpdateData.lng_1.twelfth_Illum_references_ten}
                                              />}
                                              </div>
                                              </TabPanel>
                                              </Tabs>
                                              <br />
                                              <br />
                                              <br />
                                              <br />
                                              <div className="form-group">
                                              <button className="btn btn-block">
                                              Редактирай</button>
                                              </div>
                                              </form>
                                              <br />
                                              </section>
                                              </div>
                                              )
}
export default UpdateCalibration