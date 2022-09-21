<script>
  import {onMount} from 'svelte'
  import Svelvet from "svelvet";

    let pageHeight
    let pageWidth
  onMount(() => {
    pageHeight = document.window.innerHeight
    pageWidth = document.window.innerWidth
  })

	const initialNodes = [
	  {
	    id: 1,
	    position: { x: 50, y: 50 },
	    data: { label: "Input Node" },
	    width: 175,
	    height: 40,
	    bgColor: "white"
	  },
	  {
	    id: 2,
	    position: { x: 100, y: 150 },
	    data: { label: "Default Node" },
	    width: 175,
	    height: 40,
	    bgColor: "white"
	  },
	  {
	    id: 3,
	    position: { x: 150, y: 250 },
	    data: { label: "Output Node" },
	    width: 175,
	    height: 40,
	    bgColor: "white"
	  }
	];

	const initialEdges = [
	  { id: "e1-2", source: 1, target: 2, label: "edge label" },
	  { id: "e1-3", source: 1, target: 3 }
	];
</script>

<h1>علوم الشريعة والحقيقة</h1>
<Svelvet nodes={initialNodes} edges={initialEdges} movement={true}  />


<table>
	<tr>
		<td id="fard-ayn">العلم الفرض العيني</td>
		<td>علم التوحيد</td>
	</tr>
	<tr>
		<td />
		<td id="tajwid">علم التجويد</td>
	</tr>
	<tr>
		<td />
		<td>علم العبادات</td>
	</tr>
	<tr>
		<td />
		<td>علم المعاملات</td>
	</tr>
	<tr>
		<td />
		<td>علم التصوف</td>
	</tr>
</table>

<style>
	h1 {
		text-align: center;
	}
</style>
