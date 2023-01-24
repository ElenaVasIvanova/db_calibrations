import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_deviation_meas_lng = [
  
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
Header: '1%',
accessor: 'lng.lng_deviation_one',
disableFilters: true,
},



{
Header: '2р',
accessor: 'lng.sec_Illum_references_two_lng',
disableFilters: true,
},
{
Header: '2%',
accessor: 'lng.lng_deviation_two',
disableFilters: true,
},

{
Header: '3р',
accessor: 'lng.sec_Illum_references_three_lng',
disableFilters: true,

},
{
Header: '3%',
accessor: 'lng.lng_deviation_three',
disableFilters: true,
},
{
Header: '4р',
accessor: 'lng.sec_Illum_references_four_lng',
disableFilters: true,
},
{
Header: '4%',
accessor: 'lng.lng_deviation_four',
disableFilters: true,
},

{
Header: '5р',
accessor: 'lng.sec_Illum_references_five_lng',
disableFilters: true,
},
{
Header: '5%',
accessor: 'lng.lng_deviation_five',
disableFilters: true,
},
{
Header: '6р',
accessor: 'lng.sec_Illum_references_six_lng',
disableFilters: true,
},
{
Header: '6%',
accessor: 'lng.lng_deviation_six',
disableFilters: true,
},
{
Header: '7р',
accessor: 'lng.sec_Illum_references_seven_lng',
disableFilters: true,
},
{
Header: '7%',
accessor: 'lng.lng_deviation_seven',
disableFilters: true,
},
{
Header: '8р',
accessor: 'lng.sec_Illum_references_eight_lng',
disableFilters: true,
},
{
Header: '8%',
accessor: 'lng.lng_deviation_eight',
disableFilters: true,
},

{
Header: '9р',
accessor: 'lng.sec_Illum_references_nine_lng',
disableFilters: true,
},
{
Header: '9%',
accessor: 'lng.lng_deviation_nine',
disableFilters: true,
},

{
Header: '10р',
accessor: 'lng.sec_Illum_references_ten_lng',
disableFilters: true,
},
{
Header: '10%',
accessor: 'lng.lng_deviation_ten',
disableFilters: true,
},

]




  


