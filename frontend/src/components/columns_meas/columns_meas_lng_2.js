import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_meas_lng_2 = [
  
{
Header:'СК и дата',
Footer:'СК и дата',
disableFilters: true,
accessor: properties =>
properties.num_calibration_certificate
+ ' ' +
properties.data_calibration_certificate,

},


{
Header: '6р',
accessor: 'lng.sec_Illum_references_six_lng',
disableFilters: true,
},
{
Header: '6и',
accessor: 'lng.sec_measurement_results_six_lng',
disableFilters: true,
},
{
Header: '6н',
accessor: 'lng.sec_extended_uncertaintyes_six_lng',
disableFilters: true,
},
{
Header: '7р',
accessor: 'lng.sec_Illum_references_seven_lng',
disableFilters: true,
},
{
Header: '7и',
accessor: 'lng.sec_measurement_results_seven_lng',
disableFilters: true,
},
{
Header: '7н',
accessor: 'lng.sec_extended_uncertaintyes_seven_lng',
disableFilters: true,
},
{
Header: '8р',
accessor: 'lng.sec_Illum_references_eight_lng',
disableFilters: true,
},
{
Header: '8и',
accessor: 'lng.sec_measurement_results_eight_lng',
disableFilters: true,
},
{
Header: '8н',
accessor: 'lng.sec_extended_uncertaintyes_eight_lng',
disableFilters: true,
},
{
Header: '9р',
accessor: 'lng.sec_Illum_references_nine_lng',
disableFilters: true,
},
{
Header: '9и',
accessor: 'lng.sec_measurement_results_nine_lng',
disableFilters: true,
},
{
Header: '9н',
accessor: 'lng.sec_extended_uncertaintyes_nine_lng',
disableFilters: true,
},
{
Header: '10р',
accessor: 'lng.sec_Illum_references_ten_lng',
disableFilters: true,
},
{
Header: '10и',
accessor: 'lng.sec_measurement_results_ten_lng',
disableFilters: true,
},
{
Header: '10н',
accessor: 'lng.sec_extended_uncertaintyes_ten_lng',
disableFilters: true,
},

]