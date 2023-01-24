import { format } from 'date-fns'
import { ColumnFilter } from '../ColumnFilter'
export const columns_deviation_meas_Viva_warm = [
  
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
accessor: 'Viva_warm.ninth_Illum_references_one',
disableFilters: true,
},
{
Header: '1%',
accessor: 'Viva_warm.ninth_deviation_one',
disableFilters: true,
},

{
Header: '2р',
accessor: 'Viva_warm.ninth_Illum_references_two',
disableFilters: true,
},
{
Header: '2%',
accessor: 'Viva_warm.ninth_deviation_two',
disableFilters: true,
},
{
Header: '3р',
accessor: 'Viva_warm.ninth_Illum_references_three',
disableFilters: true,

},
{
Header: '3%',
accessor: 'Viva_warm.ninth_deviation_three',
disableFilters: true,
},

{
Header: '4р',
accessor: 'Viva_warm.ninth_Illum_references_four',
disableFilters: true,
},
{
Header: '4%',
accessor: 'Viva_warm.ninth_deviation_four',
disableFilters: true,
},
{
Header: '5р',
accessor: 'Viva_warm.ninth_Illum_references_five',
disableFilters: true,
},
{
Header: '5%',
accessor: 'Viva_warm.ninth_deviation_five',
disableFilters: true,
},
{
Header: '6р',
accessor: 'Viva_warm.ninth_Illum_references_six',
disableFilters: true,
},
{
Header: '6%',
accessor: 'Viva_warm.ninth_deviation_six',
disableFilters: true,
},
{
Header: '7р',
accessor: 'Viva_warm.ninth_Illum_references_seven',
disableFilters: true,
},
{
Header: '7%',
accessor: 'Viva_warm.ninth_deviation_seven',
disableFilters: true,
},
{
Header: '8р',
accessor: 'Viva_warm.ninth_Illum_references_eight',
disableFilters: true,
},
{
Header: '8%',
accessor: 'Viva_warm.ninth_deviation_eight',
disableFilters: true,
},
{
Header: '9р',
accessor: 'Viva_warm.ninth_Illum_references_nine',
disableFilters: true,
},
{
Header: '9%',
accessor: 'Viva_warm.ninth_deviation_nine',
disableFilters: true,
},
{
Header: '10р',
accessor: 'Viva_warm.ninth_Illum_references_ten',
disableFilters: true,
},
{
Header: '10%',
accessor: 'Viva_warm.ninth_deviation_ten',
disableFilters: true,
}




]




  

