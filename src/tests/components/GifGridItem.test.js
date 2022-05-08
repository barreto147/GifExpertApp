import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas de GifGridItem", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.png";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Prueba de Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el titulo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("La imagen debe tener una url en el src y alt en los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("el div debe tener la clase de animate__fadeIn", () => {
    const div = wrapper.find("div");
    const animateClass = div.prop("className");

    expect(animateClass.includes("animate__fadeIn")).toBe(true);
  });
});
