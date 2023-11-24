import { useNavigate } from "react-router-dom"

const useNavigation = () => {

    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

  return {
    handleGoBack
  }
}

export default useNavigation
