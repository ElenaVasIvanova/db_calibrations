const mongoose = require('mongoose')
const MhlSchema = mongoose.Schema({
  mhl_deviation_one: String, 
  mhl_deviation_two: String, 
  mhl_deviation_three: String,
  mhl_deviation_four: String,
  mhl_deviation_five: String,
  mhl_deviation_six: String, 
  mhl_deviation_seven: String,
  mhl_deviation_eight: String,
  mhl_deviation_nine: String,
  mhl_deviation_ten: String,
 oneIllum_references_mhl:
 String,
 one_measurement_results_mhl:
String,
 one_extended_uncertaintyes_mhl:
 String,
 twoIllum_references_mhl:
 String,
 two_measurement_results_mhl:
 String,
 two_extended_uncertaintyes_mhl:
 String,
 threeIllum_references_mhl:
 String,
 three_measurement_results_mhl:
 String,
 three_extended_uncertaintyes_mhl:
 String,
 fourIllum_references_mhl:
 String,
 four_measurement_results_mhl:
 String,
 four_extended_uncertaintyes_mhl:
 String,
 fiveIllum_references_mhl:
 String,
 five_measurement_results_mhl:
 String,
 five_extended_uncertaintyes_mhl:
 String,
 sixIllum_references_mhl:
 String,
 six_measurement_results_mhl:
 String,
 six_extended_uncertaintyes_mhl:
 String,
 sevenIllum_references_mhl:
 String,
 seven_measurement_results_mhl:
 String,
 seven_extended_uncertaintyes_mhl:
 String,
 eightIllum_references_mhl:
 String,
 eight_measurement_results_mhl:
 String,
 eight_extended_uncertaintyes_mhl:
 String,
 nineIllum_references_mhl:
 String,
 nine_measurement_results_mhl:
 String,
 nine_extended_uncertaintyes_mhl:
 String,
 tenIllum_references_mhl:
 String,
 ten_measurement_results_mhl:
 String,
 ten_extended_uncertaintyes_mhl:
 String,
 lamp_types_one : {
  type: String,
},
lamp_stability: {
   type: String,
 },
})
const LngSchema = mongoose.Schema({
  lamp_types_two:{type:String,},
  lamp_stabilityes_two:{type:String,},
  electricity_two:{type:String,},
  voltage_two:{type:String,},
  sec_measurement_results_one_lng:{type:String,},
  sec_extended_uncertaintyes_one_lng:{type:String,},
  sec_Illum_references_one_lng:{type:String,},
  sec_measurement_results_two_lng:{type:String,},
  sec_extended_uncertaintyes_two_lng:{type:String,},
  sec_Illum_references_two_lng:{type:String,},
  sec_measurement_results_three_lng:{type:String,},
  sec_extended_uncertaintyes_three_lng:{type:String,},
  sec_Illum_references_three_lng:{type:String,},
  sec_measurement_results_four_lng:{type:String,},
  sec_extended_uncertaintyes_four_lng:{type:String,},
  sec_Illum_references_four_lng:{type:String,},
  sec_measurement_results_five_lng:{type:String,},
  sec_extended_uncertaintyes_five_lng:{type:String,},
  sec_Illum_references_five_lng:{type:String,},
  sec_measurement_results_six_lng:{type:String,},
  sec_extended_uncertaintyes_six_lng:{type:String,},
  sec_Illum_references_six_lng:{type:String,},
  sec_measurement_results_seven_lng:{type:String,},
  sec_extended_uncertaintyes_seven_lng:{type:String,},
  sec_Illum_references_seven_lng:{type:String,},
  sec_measurement_results_eight_lng:{type:String,},
  sec_extended_uncertaintyes_eight_lng:{type:String,},
  sec_Illum_references_eight_lng:{type:String,},
  sec_measurement_results_nine_lng:{type:String,},
  sec_extended_uncertaintyes_nine_lng:{type:String,},
  sec_Illum_references_nine_lng:{type:String,},
  sec_measurement_results_ten_lng:{type:String,},
  sec_extended_uncertaintyes_ten_lng:{type:String,},
  sec_Illum_references_ten_lng:{type:String,},
  lng_deviation_one: String,  
  lng_deviation_two: String,  
  lng_deviation_three: String, 
  lng_deviation_four: String, 
  lng_deviation_five: String, 
  lng_deviation_six: String,  
  lng_deviation_seven: String, 
  lng_deviation_eight: String, 
  lng_deviation_nine: String, 
  lng_deviation_ten: String, 
})
const Ll_philipsSchema = mongoose.Schema({
  lamp_types_three: {type:String,}, 
  lamp_stabilityes_three: {type:String,},
  third_measurement_results_one: {type:String,},
  third_measurement_results_two: {type:String,},
  third_measurement_results_three: {type:String,},
  third_measurement_results_four: {type:String,},
  third_measurement_results_five: {type:String,},
  third_measurement_results_six: {type:String,},
  third_measurement_results_seven: {type:String,},
  third_measurement_results_eight: {type:String,},
  third_measurement_results_nine: {type:String,},
  third_measurement_results_ten: {type:String,},
  third_extended_uncertaintyes_one: {type:String,},
  third_extended_uncertaintyes_two: {type:String,},
  third_extended_uncertaintyes_three: {type:String,},
  third_extended_uncertaintyes_four: {type:String,},
  third_extended_uncertaintyes_five: {type:String,},
  third_extended_uncertaintyes_six: {type:String,},
  third_extended_uncertaintyes_seven: {type:String,},
  third_extended_uncertaintyes_eight: {type:String,},
  third_extended_uncertaintyes_nine: {type:String,},
  third_extended_uncertaintyes_ten: {type:String,},
  third_Illum_references_one : {type:String,},
  third_Illum_references_two : {type:String,},
  third_Illum_references_three :{type:String,},
  third_Illum_references_four : {type:String,},
  third_Illum_references_five : {type:String,},
  third_Illum_references_six : {type:String,},
  third_Illum_references_seven : {type:String,},
  third_Illum_references_eight : {type:String,},
  third_Illum_references_nine : {type:String,},
  third_Illum_references_ten : {type:String,},
  third_deviation_one: String,  
  third_deviation_two: String,  
  third_deviation_three: String, 
  third_deviation_four: String, 
  third_deviation_five: String, 
  third_deviation_six: String,  
  third_deviation_seven: String, 
  third_deviation_eight: String, 
  third_deviation_nine: String, 
  third_deviation_ten: String, 
})
const A60Schema = mongoose.Schema({
  lamp_types_four : {
   type: String
 },
 lamp_stabilityes_four : {
   type: String
 },
 fourth_measurement_results_one : {
  type: String
},
fourth_measurement_results_two : {
  type: String
},
fourth_measurement_results_three : {
  type: String
},
fourth_measurement_results_four : {
  type: String
},
fourth_measurement_results_five : {
  type: String
},
fourth_measurement_results_six : {
  type: String
},
fourth_measurement_results_seven : {
  type: String
},
fourth_measurement_results_eight : {
  type: String
},
fourth_measurement_results_nine : {
  type: String
},
fourth_measurement_results_ten : {
  type: String
},
fourth_extended_uncertaintyes_one : {
  type: String
},
fourth_extended_uncertaintyes_two : {
  type: String
},
fourth_extended_uncertaintyes_three : {
  type: String
},
fourth_extended_uncertaintyes_four : {
  type: String
},
fourth_extended_uncertaintyes_five : {
  type: String
},
fourth_extended_uncertaintyes_six : {
  type: String
},
fourth_extended_uncertaintyes_seven : {
  type: String
},
fourth_extended_uncertaintyes_eight : {
  type: String
},
fourth_extended_uncertaintyes_nine : {
  type: String
},
fourth_extended_uncertaintyes_ten : {
  type: String
},
fourth_Illum_references_one :  {
 type: String
},
fourth_Illum_references_two :  {
 type: String
},
fourth_Illum_references_three :  {
 type: String
},
fourth_Illum_references_four :  {
 type: String
},
fourth_Illum_references_five :  {
 type: String
},
fourth_Illum_references_six :  {
 type: String
},
fourth_Illum_references_seven :  {
 type: String
},
fourth_Illum_references_eight :  {
 type: String
},
fourth_Illum_references_nine :  {
 type: String
},
fourth_Illum_references_ten :  {  
 type: String
},
fourth_deviation_one: String,  
  fourth_deviation_two: String,  
  fourth_deviation_three: String, 
  fourth_deviation_four: String, 
  fourth_deviation_five: String, 
  fourth_deviation_six: String,  
  fourth_deviation_seven: String, 
  fourth_deviation_eight: String, 
  fourth_deviation_nine: String, 
  fourth_deviation_ten: String, 
})
const UltraSchema = mongoose.Schema({
  lamp_types_five : {
   type: String
 },
lamp_stabilityes_five : {
 type: String
},
fifth_measurement_results_one : {
  type: String
},
fifth_measurement_results_two : {
  type: String
},
fifth_measurement_results_three : {
  type: String
},
fifth_measurement_results_four : {
  type: String
},
fifth_measurement_results_five : {
  type: String
},
fifth_measurement_results_six : {
  type: String
},
fifth_measurement_results_seven : {
  type: String
},
fifth_measurement_results_eight : {
  type: String
},
fifth_measurement_results_nine : {
  type: String
},
fifth_measurement_results_ten : {
  type: String
},
fifth_extended_uncertaintyes_one : {
  type: String
},
fifth_extended_uncertaintyes_two : {
  type: String
},
fifth_extended_uncertaintyes_three : {
  type: String
},
fifth_extended_uncertaintyes_four : {
  type: String
},
fifth_extended_uncertaintyes_five : {
  type: String
},
fifth_extended_uncertaintyes_six : {
  type: String
},
fifth_extended_uncertaintyes_seven : {
  type: String
},
fifth_extended_uncertaintyes_eight : {
  type: String
},
fifth_extended_uncertaintyes_nine : {
  type: String
},
fifth_extended_uncertaintyes_ten : {
  type: String
},
fifth_Illum_references_one :  {
 type: String
},
fifth_Illum_references_two :  {
 type: String
},
fifth_Illum_references_three :  {
 type: String
},
fifth_Illum_references_four :  {
 type: String
},
fifth_Illum_references_five :  {
 type: String
},
fifth_Illum_references_six :  {
 type: String
},
fifth_Illum_references_seven :  {
 type: String
},
fifth_Illum_references_eight :  {
 type: String
},
fifth_Illum_references_nine :  {
 type: String
},
fifth_Illum_references_ten :  {
 type: String
},
 fifth_deviation_one: String,  
  fifth_deviation_two: String,  
  fifth_deviation_three: String, 
  fifth_deviation_four: String, 
  fifth_deviation_five: String, 
  fifth_deviation_six: String,  
  fifth_deviation_seven: String, 
  fifth_deviation_eight: String, 
  fifth_deviation_nine: String, 
  fifth_deviation_ten: String, 

})
const StarSchema = mongoose.Schema({
  lamp_types_six : {
   type: String
 },
lamp_stabilityes_six : {
 type: String
},
one_measurement_results_sixth : {
  type: String
},
two_measurement_results_sixth : {
  type: String
},
three_measurement_results_sixth : {
  type: String
},
four_measurement_results_sixth : {
  type: String
},
five_measurement_results_sixth : {
  type: String
},
six_measurement_results_sixth : {
  type: String
},
seven_measurement_results_sixth : {
  type: String
},
eight_measurement_results_sixth : {
  type: String
},
nine_measurement_results_sixth : {
  type: String
},
ten_measurement_results_sixth : {
  type: String
},
one_extended_uncertaintyes_sixth : {
  type: String
},
two_extended_uncertaintyes_sixth : {
  type: String
},
three_extended_uncertaintyes_sixth : {
  type: String
},
four_extended_uncertaintyes_sixth : {
  type: String
},
five_extended_uncertaintyes_sixth : {
  type: String
},
six_extended_uncertaintyes_sixth : {
  type: String
},
seven_extended_uncertaintyes_sixth : {
  type: String
},
eight_extended_uncertaintyes_sixth : {
  type: String
},
nine_extended_uncertaintyes_sixth : {
  type: String
},
ten_extended_uncertaintyes_sixth : {
  type: String
},
oneIllum_references_sixth :  {
 type: String
},
twoIllum_references_sixth :  {
 type: String
},
threeIllum_references_sixth :  {
 type: String
},
fourIllum_references_sixth :  {
 type: String
},
fiveIllum_references_sixth :  {
 type: String
},
sixIllum_references_sixth :  {
 type: String
},
sevenIllum_references_sixth :  {
 type: String
},
eightIllum_references_sixth :  {
 type: String
},
nineIllum_references_sixth :  {
 type: String
},
tenIllum_references_sixth :  {
 type: String
},
sixth_deviation_one: String,  
  sixth_deviation_two: String,  
  sixth_deviation_three: String, 
  sixth_deviation_four: String, 
  sixth_deviation_five: String, 
  sixth_deviation_six: String,  
  sixth_deviation_seven: String, 
  sixth_deviation_eight: String, 
  sixth_deviation_nine: String, 
  sixth_deviation_ten: String, 
})
const VT_1864Schema = mongoose.Schema({
  lamp_types_seven : {
   type: String
 },
lamp_stabilityes_seven : {
 type: String
},
seventh_measurement_results_one : {
  type: String
},
seventh_measurement_results_two : {
  type: String
},
seventh_measurement_results_three : {
  type: String
},
seventh_measurement_results_four : {
  type: String
},
seventh_measurement_results_five : {
  type: String
},
seventh_measurement_results_six : {
  type: String
},
seventh_measurement_results_seven : {
  type: String
},
seventh_measurement_results_eight : {
  type: String
},
seventh_measurement_results_nine : {
  type: String
},
seventh_measurement_results_ten : {
  type: String
},
seventh_extended_uncertaintyes_one : {
  type: String
},
seventh_extended_uncertaintyes_two : {
  type: String
},
seventh_extended_uncertaintyes_three : {
  type: String
},
seventh_extended_uncertaintyes_four : {
  type: String
},
seventh_extended_uncertaintyes_five : {
  type: String
},
seventh_extended_uncertaintyes_six : {
  type: String
},
seventh_extended_uncertaintyes_seven : {
  type: String
},
seventh_extended_uncertaintyes_eight : {
  type: String
},
seventh_extended_uncertaintyes_nine : {
  type: String
},
seventh_extended_uncertaintyes_ten : {
  type: String
},
seventh_Illum_references_one :  {
 type: String
},
seventh_Illum_references_two :  {
 type: String
},
seventh_Illum_references_three :  {
 type: String
},
seventh_Illum_references_four :  {
 type: String
},
seventh_Illum_references_five :  {
 type: String
},
seventh_Illum_references_six :  {
 type: String
},
seventh_Illum_references_seven :  {
 type: String
},
seventh_Illum_references_eight :  {
 type: String
},
seventh_Illum_references_nine :  {
 type: String
},
seventh_Illum_references_ten :  {
 type: String
},
seventh_deviation_one: String,  
  seventh_deviation_two: String,  
  seventh_deviation_three: String, 
  seventh_deviation_four: String, 
  seventh_deviation_five: String, 
  seventh_deviation_six: String,  
  seventh_deviation_seven: String, 
  seventh_deviation_eight: String, 
  seventh_deviation_nine: String, 
  seventh_deviation_ten: String, 
}) 
const Viva_coolSchema = mongoose.Schema({
 lamp_types_eight : {
   type: String
 },
lamp_stabilityes_eight : {
 type: String
},
eighth_measurement_results_one : {
  type: String
},
eighth_measurement_results_two : {
  type: String
},
eighth_measurement_results_three : {
  type: String
},
eighth_measurement_results_four : {
  type: String
},
eighth_measurement_results_five : {
  type: String
},
eighth_measurement_results_six : {
  type: String
},
eighth_measurement_results_seven : {
  type: String
},
eighth_measurement_results_eight : {
  type: String
},
eighth_measurement_results_nine : {
  type: String
},
eighth_measurement_results_ten : {
  type: String
},
eighth_extended_uncertaintyes_one : {
  type: String
},
eighth_extended_uncertaintyes_two : {
  type: String
},
eighth_extended_uncertaintyes_three : {
  type: String
},
eighth_extended_uncertaintyes_four : {
  type: String
},
eighth_extended_uncertaintyes_five : {
  type: String
},
eighth_extended_uncertaintyes_six : {
  type: String
},
eighth_extended_uncertaintyes_seven : {
  type: String
},
eighth_extended_uncertaintyes_eight : {
  type: String
},
eighth_extended_uncertaintyes_nine : {
  type: String
},
eighth_extended_uncertaintyes_ten : {
  type: String
},
eighth_Illum_references_one :  {
 type: String
},
eighth_Illum_references_two :  {
 type: String
},
eighth_Illum_references_three :  {
 type: String
},
eighth_Illum_references_four :  {
 type: String
},
eighth_Illum_references_five :  {
 type: String
},
eighth_Illum_references_six :  {
 type: String
},
eighth_Illum_references_seven :  {
 type: String
},
eighth_Illum_references_eight :  {
 type: String
},
eighth_Illum_references_nine :  {
 type: String
},
eighth_Illum_references_ten :  {
 type: String
},
 eighth_deviation_one: String,  
  eighth_deviation_two: String,  
  eighth_deviation_three: String, 
  eighth_deviation_four: String, 
  eighth_deviation_five: String, 
  eighth_deviation_six: String,  
  eighth_deviation_seven: String, 
  eighth_deviation_eight: String, 
  eighth_deviation_nine: String, 
  eighth_deviation_ten: String, 

}) 
const Viva_warmSchema = mongoose.Schema({
lamp_types_nine : {
   type: String
 },
lamp_stabilityes_nine : {
 type: String
},
ninth_measurement_results_one : {
  type: String
},
ninth_measurement_results_two : {
  type: String
},
ninth_measurement_results_three : {
  type: String
},
ninth_measurement_results_four : {
  type: String
},
ninth_measurement_results_five : {
  type: String
},
ninth_measurement_results_six : {
  type: String
},
ninth_measurement_results_seven : {
  type: String
},
ninth_measurement_results_eight : {
  type: String
},
ninth_measurement_results_nine : {
  type: String
},
ninth_measurement_results_ten : {
  type: String
},
ninth_extended_uncertaintyes_one : {
  type: String
},
ninth_extended_uncertaintyes_two : {
  type: String
},
ninth_extended_uncertaintyes_three : {
  type: String
},
ninth_extended_uncertaintyes_four : {
  type: String
},
ninth_extended_uncertaintyes_five : {
  type: String
},
ninth_extended_uncertaintyes_six : {
  type: String
},
ninth_extended_uncertaintyes_seven : {
  type: String
},
ninth_extended_uncertaintyes_eight : {
  type: String
},
ninth_extended_uncertaintyes_nine : {
  type: String
},
ninth_extended_uncertaintyes_ten : {
  type: String
},
ninth_Illum_references_one :  {
 type: String
},
ninth_Illum_references_two :  {
 type: String
},
ninth_Illum_references_three :  {
 type: String
},
ninth_Illum_references_four :  {
 type: String
},
ninth_Illum_references_five :  {
 type: String
},
ninth_Illum_references_six :  {
 type: String
},
ninth_Illum_references_seven :  {
 type: String
},
ninth_Illum_references_eight :  {
 type: String
},
ninth_Illum_references_nine :  {
 type: String
},
ninth_Illum_references_ten :  {
 type: String
},
ninth_deviation_one: String,  
  ninth_deviation_two: String,  
  ninth_deviation_three: String, 
  ninth_deviation_four: String, 
  ninth_deviation_five: String, 
  ninth_deviation_six: String,  
  ninth_deviation_seven: String, 
  ninth_deviation_eight: String, 
  ninth_deviation_nine: String, 
  ninth_deviation_ten: String, 
}) 
const OSRAM_6500Schema = mongoose.Schema({
  lamp_types_ten : {
   type: String
 },
lamp_stabilityes_ten : {
 type: String
},
tenth_measurement_results_one : {
  type: String
},
tenth_measurement_results_two : {
  type: String
},
tenth_measurement_results_three : {
  type: String
},
tenth_measurement_results_four : {
  type: String
},
tenth_measurement_results_five : {
  type: String
},
tenth_measurement_results_six : {
  type: String
},
tenth_measurement_results_seven : {
  type: String
},
tenth_measurement_results_eight : {
  type: String
},
tenth_measurement_results_nine : {
  type: String
},
tenth_measurement_results_ten: {
  type: String
},
tenth_extended_uncertaintyes_one : {
  type: String
},
tenth_extended_uncertaintyes_two : {
  type: String
},
tenth_extended_uncertaintyes_three : {
  type: String
},
tenth_extended_uncertaintyes_four : {
  type: String
},
tenth_extended_uncertaintyes_five : {
  type: String
},
tenth_extended_uncertaintyes_six : {
  type: String
},
tenth_extended_uncertaintyes_seven : {
  type: String
},
tenth_extended_uncertaintyes_eight : {
  type: String
},
tenth_extended_uncertaintyes_nine : {
  type: String
},
tenth_extended_uncertaintyes_ten: {
  type: String
},
tenth_Illum_references_one :  {
 type: String
},
tenth_Illum_references_two :  {
 type: String
},
tenth_Illum_references_three :  {
 type: String
},
tenth_Illum_references_four :  {
 type: String
},
tenth_Illum_references_five :  {
 type: String
},
tenth_Illum_references_six :  {
 type: String
},
tenth_Illum_references_seven :  {
 type: String
},
tenth_Illum_references_eight :  {
 type: String
},
tenth_Illum_references_nine :  {
 type: String
},
tenth_Illum_references_ten:  {
 type: String
},
tenth_deviation_one: String,  
  tenth_deviation_two: String,  
  tenth_deviation_three: String, 
  tenth_deviation_four: String, 
  tenth_deviation_five: String, 
  tenth_deviation_six: String,  
  tenth_deviation_seven: String, 
  tenth_deviation_eight: String, 
  tenth_deviation_nine: String, 
  tenth_deviation_ten: String, 
}) 
const Ll_6500Schema = mongoose.Schema({
  lamp_types_eleven  :  {
   type: String
 },
lamp_stabilityes_eleven :  {
   type: String
 },
 eleventh_measurement_results_one :  {
   type: String
 },
 eleventh_measurement_results_two :  {
   type: String
 },
 eleventh_measurement_results_three :  {
   type: String
 },
 eleventh_measurement_results_four :  {
   type: String
 },
 eleventh_measurement_results_five :  {
   type: String
 },
 eleventh_measurement_results_six :  {
   type: String
 },
 eleventh_measurement_results_seven :  {
   type: String
 },
 eleventh_measurement_results_eight :  {
   type: String
 },
 eleventh_measurement_results_nine :  {
   type: String
 },
 eleventh_measurement_results_ten :  {
   type: String
 },
 eleventh_extended_uncertaintyes_one :  {
   type: String
 },
 eleventh_extended_uncertaintyes_two :  {
   type: String
 },
 eleventh_extended_uncertaintyes_three :  {
   type: String
 },
 eleventh_extended_uncertaintyes_four :  {
   type: String
 },
 eleventh_extended_uncertaintyes_five :  {
   type: String
 },
 eleventh_extended_uncertaintyes_six :  {
   type: String
 },
 eleventh_extended_uncertaintyes_seven :  {
   type: String
 },
 eleventh_extended_uncertaintyes_eight :  {
   type: String
 },
 eleventh_extended_uncertaintyes_nine :  {
   type: String
 },
 eleventh_extended_uncertaintyes_ten :  {
   type: String
 },
 eleventh_Illum_references_one :  {
   type: String
 },
 eleventh_Illum_references_two :  {
   type: String
 },
 eleventh_Illum_references_three :  {
   type: String
 },
 eleventh_Illum_references_four :  {
   type: String
 },
 eleventh_Illum_references_five :  {
   type: String
 },
 eleventh_Illum_references_six :  {
   type: String
 },
 eleventh_Illum_references_seven :  {
   type: String
 },
 eleventh_Illum_references_eight :  {
   type: String
 },
 eleventh_Illum_references_nine :  {
   type: String
 },
 eleventh_Illum_references_ten :  {
   type: String
 },
 eleventh_deviation_one: String,  
  eleventh_deviation_two: String,  
  eleventh_deviation_three: String, 
  eleventh_deviation_four: String, 
  eleventh_deviation_five: String, 
  eleventh_deviation_six: String,  
  eleventh_deviation_seven: String, 
  eleventh_deviation_eight: String, 
  eleventh_deviation_nine: String, 
  eleventh_deviation_ten: String, 
})
const lng_1Schema = mongoose.Schema({
  lamp_types_twelve :  {
   type: String
 },
 lamp_stabilityes_twelve:  {
   type: String
 },
 twelfth_measurement_results_one:  {
   type: String
 },
 twelfth_measurement_results_two:  {
   type: String
 },
 twelfth_measurement_results_three:  {
   type: String
 },
 twelfth_measurement_results_four:  {
   type: String
 },
 twelfth_measurement_results_five:  {
   type: String
 },
 twelfth_measurement_results_six:  {
   type: String
 },
 twelfth_measurement_results_seven:  {
   type: String
 },
 twelfth_measurement_results_eight:  {
   type: String
 },
 twelfth_measurement_results_nine:  {
   type: String
 },
 twelfth_measurement_results_ten:  {
   type: String
 },
 twelfth_extended_uncertaintyes_one:  {
   type: String
 },
 twelfth_extended_uncertaintyes_two:  {
   type: String
 },
 twelfth_extended_uncertaintyes_three:  {
   type: String
 },
 twelfth_extended_uncertaintyes_four:  {
   type: String
 },
 twelfth_extended_uncertaintyes_five:  {
   type: String
 },
 twelfth_extended_uncertaintyes_six:  {
   type: String
 },
 twelfth_extended_uncertaintyes_seven:  {
   type: String
 },
 twelfth_extended_uncertaintyes_eight:  {
   type: String
 },
 twelfth_extended_uncertaintyes_nine:  {
   type: String
 },
 twelfth_extended_uncertaintyes_ten:  {
   type: String
 },
 twelfth_Illum_references_one:  {
   type: String
 },
 twelfth_Illum_references_two:  {
   type: String
 },
 twelfth_Illum_references_three:  {
   type: String
 },
 twelfth_Illum_references_four:  {
   type: String
 },
 twelfth_Illum_references_five:  {
   type: String
 },
 twelfth_Illum_references_six:  {
   type: String
 },
 twelfth_Illum_references_seven:  {
   type: String
 },
 twelfth_Illum_references_eight:  {
   type: String
 },
 twelfth_Illum_references_nine:  {
   type: String
 },
 twelfth_Illum_references_ten:  {
   type: String
 },
 twelfth_deviation_one: String,  
  twelfth_deviation_two: String,  
  twelfth_deviation_three: String, 
  twelfth_deviation_four: String, 
  twelfth_deviation_five: String, 
  twelfth_deviation_six: String,  
  twelfth_deviation_seven: String, 
  twelfth_deviation_eight: String, 
  twelfth_deviation_nine: String, 
  twelfth_deviation_ten: String, 
})
const calibrationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    //required: true,
    ref: 'User',
  },
  device: {
    type: String,
  },
  location: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  type_model: {
    type: String,
   // required: true
 },
 identification: {
  type: String,
   //required: true
 },
 client: {
  type: String,
   //required: true
 },
 application_num: {
  type: String,
   //required: true
 },
 town_village: { 
  type: String,
  trim: true
},
quarter: {
 type: String,
 trim: true
},
street:
{ type: String,
  trim: true
},
number: {
  type: String,
  trim: true
},
block: {
  type: String,
  trim: true
},
primary_list: { 
  type: String,
  trim: true
},
incoming_num: { 
  type: String,
  trim: true
},
price: { 
  type: String,
  trim: true
},
invoice: { 
  type: String,
  trim: true
},
еntrance: { 
  type: String,
  trim: true
},
floor: 
{ type: String,
 trim: true
},
apartment: { type: String, trim: true},
cer_town_village: { type: String, trim: true},
cer_quarter: { type: String, trim: true},
cer_street: { type: String, trim: true},
cer_number: { type: String, trim: true},
cer_block: { type: String, trim: true},
cer_еntrance: { type: String, trim: true},
cer_floor: { type: String, trim: true},
cer_apartment: { type: String, trim: true},
calibration_date: {
  type: String
},
number_pages: {
  type: String
},
performed: {
  type: String,
  enum: ['главен експерт: Елица Петрова', 'началник отдел: Николай Александров', 'главен експерт: Елена Иванова'], 
},
calibration_method: {
  type: String,
},
num_calibration_certificate: {type: String,
//required: true
},
data_calibration_certificate: {type: String,
//required: true
},
logos: {
  type: String,
   //required: true
 }, 
 metrological_traceabilityes: {
  type: String,
  enum: ["Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ.",
  "Проследимостта на еталона е осигурена до Международната система на единици SI чрез три броя еталонни лампи тип Wi41/G и фотометричен приемник Р30SCT, №0689321, калибрирани в РТВ – Германия. Свидетелства за калибриране №44001 PTB 11, №44002 PTB 11, №47213 PTB 15 и №44238 РТВ 15 от 15.04.2019. Еталонен луксметър тип “B2” с идентификационен №0577040. Свидетелство за калибриране №18-ОИ/22.03.2022/ГД НЦМ. Измервател на фототок I1000 с идентификационен №0692041, свидетелство за калибриране №060-ЕМИ/27.06.2019/ГД НЦМ."] 
},
air_temperature: {
  type: String, trim: true },
  air_temperature_un: { 
    type: String,
    trim: true },
    relative_humidity: { 
      type: String, trim: true},
      relative_humidity_un :{ 
        type: String, trim: true},
        mhl: {
          type: MhlSchema,
    //required: true,
  },
  lng: {
    type: LngSchema,
    //required: true,
  },
  Ll_philips: {
    type:  Ll_philipsSchema,
    //required: true,
  },
  A60: {
    type: A60Schema,
    //required: true,
  },
  Ultra: {
    type: UltraSchema,
    //required: true,
  },
  Star: {
    type: StarSchema,
    //required: true,
  },
  VT_1864: {
    type: VT_1864Schema,
    //required: true,
  },
  Viva_cool: {
    type: Viva_coolSchema,
    //required: true,
  },
  Viva_warm: {
    type: Viva_warmSchema ,
    //required: true,
  },
  OSRAM_6500 : {
    type: OSRAM_6500Schema,
    //required: true,
  },
  Ll_6500: {
    type: Ll_6500Schema,
  },
  lng_1 : {
    type: lng_1Schema,
  } 
},{
  timestamps: true,
})
module.exports = mongoose.model('Calibration', calibrationSchema)