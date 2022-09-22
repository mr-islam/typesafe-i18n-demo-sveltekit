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
			bgColor: 'skyblue',
			sourcePosition: 'left',
			borderColor: 'skyblue'
		},
		{
			id: 2,
			position: { x: 50, y: 100 },
			data: {
				label: 'معرفة العقائد الواجبة والمتسحيلة والجائزة في حق اللع تعالى ورسله عليهم الصلاة والسلام والإيمان بالسمعيات',
			},
			width: 175,
			height: 100,
			bgColor: 'white',
			targetPosition: 'right',
		},
		{
			id: 3,
			position: { x: 50, y: 225 },
			data: { label: 'إتقان تلاوة القرآن وترتيله' },
			width: 175,
			height: 40,
			bgColor: 'white',
			targetPosition: 'right',
		},
		{
			id: 4,
			position: { x: 50, y: 280 },
			data: { label: 'الإتيان بالعبادات غلى الوجه الشرعي الصحيح' },
			width: 175,
			height: 50,
			bgColor: 'white',
			targetPosition: 'right',
		},
		{
			id: 5,
			position: { x: 50, y: 345 },
			data: { label: 'إجراء المعاملات الشاملة للبيوع، وأحكام الأسرة على الوجه الذي شرعه الله تعالى' },
			width: 175,
			height: 70,
			bgColor: 'white',
			targetPosition: 'right',
		},
		{
			id: 6,
			position: { x: 50, y: 425 },
			data: { label: 'إصلاح القلب وتهذيب النفس' },
			width: 175,
			height: 40,
			bgColor: 'white',
			targetPosition: 'right',
		},
	]

	const initialEdges = [
		{
			id: 'e1-2',
			source: 1,
			target: 2,
			label: 'علم التوحيد',
			labelBgColor: 'skyblue',
			labelTextColor: 'black',
			noHandle: true,
			arrow: true,
			animate: true,
			edgeColor: 'black'
		},
		{
			id: 'e1-3',
			source: 1,
			target: 3,
			label: 'علم التجويد',
			labelBgColor: 'skyblue',
			labelTextColor: 'black',
			noHandle: true,
			arrow: true,
			animate: false,
			edgeColor: 'black'
		},
		{
			id: 'e1-4',
			source: 1,
			target: 4,
			label: 'علم العبادات',
			labelBgColor: 'skyblue',
			labelTextColor: 'black',
			noHandle: true,
			arrow: true,
			animate: false,
			edgeColor: 'black'
		},
		{
			id: 'e1-5',
			source: 1,
			target: 5,
			label: 'علم المعاملات',
			labelBgColor: 'skyblue',
			labelTextColor: 'black',
			noHandle: true,
			arrow: true,
			animate: false,
			edgeColor: 'black'
		},
		{
			id: 'e1-6',
			source: 1,
			target: 6,
			label: 'علم التصوف',
			labelBgColor: 'skyblue',
			labelTextColor: 'black',
			noHandle: true,
			arrow: true,
			animate: false,
			edgeColor: 'black'
		},
	]
</script>

<h1>علوم الشريعة والحقيقة</h1>
<div>
	<Svelvet width={500} height={1000} nodes={initialNodes} edges={initialEdges} movement={true} background />
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
