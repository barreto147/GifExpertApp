import { CategoryAdd } from "../../components/CategoryAdd";
import { shallow } from "enzyme";

describe("Pruebas de CategoryAdd", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<CategoryAdd setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoryAdd setCategories={setCategories} />);
  });

  test("Prueba de Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";

    input.simulate("change", {
      target: {
        value,
      },
    });
    const inputAfter = wrapper.find("input");
    expect(inputAfter.prop("value")).toBe(value);
  });

  test("no debe de postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar setCategories y limpiar la caja de texto", () => {
    const value = "Hola galaxia";

    wrapper.find("input").simulate("change", {
      target: {
        value,
      },
    });

    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    const inputAfter = wrapper.find("input");
    expect(inputAfter.prop("value")).toBe("");
  });
});
