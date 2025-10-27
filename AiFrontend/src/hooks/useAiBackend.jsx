import axios from "axios";

const useAiBackend = () => {
    const sendMessage = async (prompt) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/chat`, { prompt });
            const data = await res.data;
            return data.content || data;
        } catch (err) {
            return err.message;
        }
    };
    const generateImage = async () => {

    }

    // Return only data and actions — never JSX
    return { sendMessage,generateImage};
};
export default useAiBackend;
