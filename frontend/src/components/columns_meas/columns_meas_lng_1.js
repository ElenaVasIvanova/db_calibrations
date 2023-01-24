import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_meas_lng_1 = [
  
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
accessor: 'lng_1.twelfth_Illum_references_one',
disableFilters: true,
},
{
Header: '1и',
accessor: 'lng_1.twelfth_measurement_results_one',
disableFilters: true,
},
{
Header: '1н',
accessor: 'lng_1.twelfth_extended_uncertaintyes_one',
disableFilters: true,
},


{
Header: '2р',
accessor: 'lng_1.twelfth_Illum_references_two',
disableFilters: true,
},
{
Header: '2и',
accessor: 'lng_1.twelfth_measurement_results_two',
disableFilters: true,
},
{
Header: '2н',
accessor: 'lng_1.twelfth_extended_uncertaintyes_two',
disableFilters: true,
},
{
Header: '3р',
accessor: 'lng_1.twelfth_Illum_references_three',
disableFilters: true,

},
{
Header: '3и',
accessor: 'lng_1.twelfth_measurement_results_three',
disableFilters: true,
},
{
Header: '3н',
accessor: 'lng_1.twelfth_extended_uncertaintyes_three',
disableFilters: true,
},
{
Header: '4р',
accessor: 'lng_1.twelfth_Illum_references_four',
disableFilters: true,
},
{
Header: '4и',
accessor: 'lng_1.twelfth_measurement_results_four',
disableFilters: true,
},
{
Header: '4н',
accessor: 'lng_1.twelfth_extended_uncertaintyes_four',
disableFilters: true,
},
{
Header: '5р',
accessor: 'lng_1.twelfth_Illum_references_five',
disableFilters: true,
},
{
Header: '5и',
accessor: 'lng_1.twelfth_measurement_results_five',
disableFilters: true,
},
{
Header: '5н',
accessor: 'lng_1.twelfth_extended_uncertaintyes_five',
disableFilters: true,
}



]




  

