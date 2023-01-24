import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_meas_lng = [
  
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
Header: '1р',
accessor: 'lng.sec_Illum_references_one_lng',
disableFilters: true,
},
{
Header: '1и',
accessor: 'lng.sec_measurement_results_one_lng',
disableFilters: true,
},
{
Header: '1н',
accessor: 'lng.sec_extended_uncertaintyes_one_lng',
disableFilters: true,
},


{
Header: '2р',
accessor: 'lng.sec_Illum_references_two_lng',
disableFilters: true,
},
{
Header: '2и',
accessor: 'lng.sec_measurement_results_two_lng',
disableFilters: true,
},
{
Header: '2н',
accessor: 'lng.sec_extended_uncertaintyes_two_lng',
disableFilters: true,
},
{
Header: '3р',
accessor: 'lng.sec_Illum_references_three_lng',
disableFilters: true,

},
{
Header: '3и',
accessor: 'lng.sec_measurement_results_three_lng',
disableFilters: true,
},
{
Header: '3н',
accessor: 'lng.sec_extended_uncertaintyes_three_lng',
disableFilters: true,
},
{
Header: '4р',
accessor: 'lng.sec_Illum_references_four_lng',
disableFilters: true,
},
{
Header: '4и',
accessor: 'lng.sec_measurement_results_four_lng',
disableFilters: true,
},
{
Header: '4н',
accessor: 'lng.sec_extended_uncertaintyes_four_lng',
disableFilters: true,
},
{
Header: '5р',
accessor: 'lng.sec_Illum_references_five_lng',
disableFilters: true,
},
{
Header: '5и',
accessor: 'lng.sec_measurement_results_five_lng',
disableFilters: true,
},
{
Header: '5н',
accessor: 'lng.sec_extended_uncertaintyes_five_lng',
disableFilters: true,
}



]




  


