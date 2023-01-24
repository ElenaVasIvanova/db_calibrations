import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_meas_A60_2 = [
  
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
accessor: 'A60.fourth_Illum_references_six',
disableFilters: true,
},
{
Header: '6и',
accessor: 'A60.fourth_measurement_results_six',
disableFilters: true,
},
{
Header: '6н',
accessor: 'A60.fourth_extended_uncertaintyes_six',
disableFilters: true,
},
{
Header: '7р',
accessor: 'A60.fourth_Illum_references_seven',
disableFilters: true,
},
{
Header: '7и',
accessor: 'A60.fourth_measurement_results_seven',
disableFilters: true,
},
{
Header: '7н',
accessor: 'A60.fourth_extended_uncertaintyes_seven',
disableFilters: true,
},
{
Header: '8р',
accessor: 'A60.fourth_Illum_references_eight',
disableFilters: true,
},
{
Header: '8и',
accessor: 'A60.fourth_measurement_results_eight',
disableFilters: true,
},
{
Header: '8н',
accessor: 'A60.fourth_extended_uncertaintyes_eight',
disableFilters: true,
},
{
Header: '9р',
accessor: 'A60.fourth_Illum_references_nine',
disableFilters: true,
},
{
Header: '9и',
accessor: 'A60.fourth_measurement_results_nine',
disableFilters: true,
},
{
Header: '9н',
accessor: 'A60.fourth_extended_uncertaintyes_nine',
disableFilters: true,
},
{
Header: '10р',
accessor: 'A60.fourth_Illum_references_ten',
disableFilters: true,
},
{
Header: '10и',
accessor: 'A60.fourth_measurement_results_ten',
disableFilters: true,
},
{
Header: '10н',
accessor: 'A60.fourth_extended_uncertaintyes_ten',
disableFilters: true,
},

]