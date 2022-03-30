import {z} from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

const form = z.object({
	foo: z.string(),
	bar: z.string(),
})

export default function Form1() {
	useForm({
		resolver: zodResolver(form),
	})
	return (
		<div>
			<h1>Form 1</h1>
		</div>
	)
}
