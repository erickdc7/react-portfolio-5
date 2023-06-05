import LineGradient from "../components/LineGradient"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

const Contact = () => {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();

        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <div>Contact</div>
    )
}

export default Contact