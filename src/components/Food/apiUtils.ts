import axios from "axios";
import GlobalState from "../GlobalState";


export const FetchCategory = async () => {
  const URL = GlobalState((state) => state.URL);

  const useGlobalState = GlobalState((state) => state);

  try {
    const response = await axios.get(
      `${URL}/categories/${useGlobalState.globalCategory}/recipes`
    );

    if (response.status === 200) {
      useGlobalState.setGlobalCategoryData(response.data);
    } else console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};
