<script>
	import { onMount } from 'svelte'
	import Svelvet from 'svelvet'

	let pageHeight
	let pageWidth
	onMount(() => {
		pageHeight = document.window.innerHeight
		pageWidth = document.window.innerWidth
	})

	const initialNodes = [
		{
			id: 1,
			position: { x: 350, y: 280 },
			data: { label: 'الفرض العيني' },
			width: 125,
			height: 40,
			bgColor: 'white',
			sourcePosition: 'left',
			borderColor: 'black'
		},
		{
			id: 2,
			position: { x: 250, y: 100 },
			data: { label: 'علم التوحيد' },
			width: 80,
			height: 40,
			bgColor: '#61FFA3',
			sourcePosition: 'left',
			targetPosition: 'right',
			borderColor: '#61FFA3'
		},
		{
			id: 3,
			position: { x: 50, y: 75 },
			data: {
				label: 'معرفة العقائد الواجبة والمتسحيلة والجائزة في حق اللع تعالى ورسله عليهم الصلاة والسلام والإيمان بالسمعيات',
			},
			width: 175,
			height: 100,
			bgColor: '#61FFA3',
			borderColor: "#61FFA3",
			targetPosition: 'right',
		},
		{
			id: 4,
			position: { x: 250, y: 200 },
			data: { label: 'علم التجويد' },
			width: 80,
			height: 40,
			bgColor: '#A2FDFF',
			sourcePosition: 'left',
			targetPosition: 'right',
			borderColor: '#A2FDFF'
		},
		{
			id: 5,
			position: { x: 100, y: 200 },
			data: {
				label: 'إتقان تلاوة القرآن وترتيله',
			},
			width: 125,
			height: 40,
			bgColor: '#A2FDFF',
			borderColor: '#A2FDFF',
			targetPosition: 'right',
		},
		{
			id: 6,
			position: { x: 250, y: 275 },
			data: { label: 'علم العبادات' },
			width: 80,
			height: 40,
			bgColor: '#A7B7FF',
			sourcePosition: 'left',
			targetPosition: 'right',
			borderColor: '#A7B7FF'
		},
		{
			id: 7,
			position: { x: 50, y: 275 },
			data: {
				label: 'الإتيان بالعبادات على الوجه الشرعي الصحيح',
			},
			width: 175,
			height: 50,
			bgColor: '#A7B7FF',
			borderColor: '#A7B7FF',
			targetPosition: 'right',
		},
		{
			id: 8,
			position: { x: 250, y: 350 },
			data: { label: 'علم المعاملات' },
			width: 80,
			height: 40,
			bgColor: '#FFC5A7',
			sourcePosition: 'left',
			targetPosition: 'right',
			borderColor: '#FFC5A7'
		},
		{
			id: 9,
			position: { x: 50, y: 350 },
			data: {
				label: 'إجراء المعاملات الشاملة للبيوع، وأحكام الأسرة على الوجه الذي شرعه الله تعالى',
			},
			width: 175,
			height: 70,
			bgColor: '#FFC5A7',
			targetPosition: 'right',
			borderColor: '#FFC5A7',
		},
		{
			id: 10,
			position: { x: 250, y: 450 },
			data: { label: 'علم التصوف' },
			width: 80,
			height: 40,
			bgColor: '#EEFFB2',
			sourcePosition: 'left',
			targetPosition: 'right',
			borderColor: '#EEFFB2'
		},
		{
			id: 11,
			position: { x: 50, y: 450 },
			data: {
				label: 'إصلاح القلب وتهذيب النفس',
			},
			width: 175,
			height: 70,
			bgColor: '#EEFFB2',
			targetPosition: 'right',
			borderColor: '#EEFFB2',
		}		
	]

	const initialEdges = [
		{
			id: 'e1-2',
			source: 1,
			target: 2,
			noHandle: true,
			arrow: false,
			edgeColor: 'black'
		},
		{
			id: 'e2-3',
			source: 2,
			target: 3,
			noHandle: true,
			arrow: true,
			edgeColor: 'black'
		},
		{
			id: 'e1-4',
			source: 1,
			target: 4,
			noHandle: true,
			arrow: false,
			edgeColor: 'black'
		},
		{
			id: 'e4-5',
			source: 4,
			target: 5,
			noHandle: true,
			arrow: true,
			edgeColor: 'black'
		},
		{
			id: 'e1-6',
			source: 1,
			target: 6,
			noHandle: true,
			arrow: false,
			edgeColor: 'black'
		},
		{
			id: 'e6-7',
			source: 6,
			target: 7,
			noHandle: true,
			arrow: true,
			edgeColor: 'black'
		},
		{
			id: 'e1-8',
			source: 1,
			target: 8,
			noHandle: true,
			arrow: false,
			edgeColor: 'black'
		},
		{
			id: 'e8-9',
			source: 8,
			target: 9,
			noHandle: true,
			arrow: true,
			edgeColor: 'black'
		},
		{
			id: 'e1-10',
			source: 1,
			target: 10,
			noHandle: true,
			arrow: false,
			edgeColor: 'black'
		},
		{
			id: 'e10-11',
			source: 10,
			target: 11,
			noHandle: true,
			arrow: true,
			edgeColor: 'black'
		},
	]
</script>

<h1>علوم الشريعة والحقيقة</h1>
<div>
	<Svelvet width={500} height={1000} nodes={initialNodes} edges={initialEdges} movement={true} />
</div>


<style>
	div {
		width: 500px;
		margin: 0 auto;
		border: 2px solid rgb(182, 255, 142);
		border-radius: 12px;
	}
	h1 {
		text-align: center;
	}
</style>
