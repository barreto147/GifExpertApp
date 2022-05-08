import GifExpertApp from "../../components/GifExpertApp";
import { shallow } from "enzyme";

describe("Pruebas en <GifExpertApp/>", () => {
  test("Prueba de Snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar una lista de categorias", () => {
    const categories = ["One Punch Man", "Dragon ball"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
