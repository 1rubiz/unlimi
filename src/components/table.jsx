import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useContext, useEffect, useState } from 'react'
import {DataContext} from '../context/data'

function TableData() {
	const [val, setVal] = useState([])
	const data = useContext(DataContext);
	// console.log(data)
	useEffect(() => {
		// console.log(data.data.data)
		setVal(data.data.data)
	}, [data])
	return (
		<div>
			<h1 className='mt-4 mx-8'>Department List</h1>
			<div className='pl-8 my-4'>
				<Table>
				  <TableCaption>A list of your recent invoices.</TableCaption>
				  <TableHeader>
				    <TableRow>
					    <TableHead>S/N</TableHead>
					    <TableHead>Image</TableHead>
				     	<TableHead>SKU</TableHead>
				     	<TableHead>Name</TableHead>
				     	<TableHead>Title</TableHead>
				     	<TableHead>Description</TableHead>
				     	<TableHead>Brand</TableHead>
				     	<TableHead>Cost Price</TableHead>
				     	<TableHead>Quantity</TableHead>
				     	<TableHead>Size</TableHead>
				    </TableRow>
				  </TableHeader>
				  <TableBody>
		    		{ val && val.map((item, key)=>{
		    			
		    			return(
		    				<TableRow key={key}>
		    					<TableCell>
				    		<p className='flex justify-center items-center gap-2'><input type='checkbox'/>{key}</p>
				    	</TableCell>
				    	<TableCell><img src={item.Image_1}/></TableCell>
				    	<TableCell>{item.SKU}</TableCell>
				    	<TableCell>{item.Name}</TableCell>
				    	<TableCell>{item.Title}</TableCell>
				    	<TableCell>{item.Description}</TableCell>
				    	<TableCell>{item.Brand}</TableCell>
				    	<TableCell>{item['Cost Price']}</TableCell>
				    	<TableCell>{item.Quantity}</TableCell>
				    	<TableCell>{item.size}</TableCell>
		    				</TableRow>
		    			)
		    		})}
				  </TableBody>
				</Table>
			</div>
		</div>
	)
}

export default TableData