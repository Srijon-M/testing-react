import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

describe("Skills", () => {
    const skills = ['HTML', 'CSS', "Javascript"];

    test("should render the component", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test("renders all the skills", () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole("listitem");
        expect(listItemElements).toHaveLength(skills.length);
    });

    test("renders text", () => {
        render(<Skills skills={skills}/>);
        const paragraphElelment = screen.getByText((content) => content.startsWith("Hey"));
        expect(paragraphElelment).toBeInTheDocument();
    });

    test("renders login button", () => {
        render(<Skills skills={skills} />);
        const loginBtnElement = screen.getByRole("button", {
            name: "Login"
        });
        expect(loginBtnElement).toBeInTheDocument();
    });

    test("should not render the start learning button", () => {
        render(<Skills skills={skills} />)
        const startLearningBtnElelment = screen.queryByRole("button", {
            name: "Start Learning"
        });
        expect(startLearningBtnElelment).not.toBeInTheDocument();
    })

    test("start learning button is eventually displayed", async () => {
        render(<Skills skills={skills} />)
        // const view = render(<Skills skills={skills} />)
        // logRoles(view.container);
        // screen.debug();
        const startLearLearningBtn = await screen.findByRole("button", {
            name: "Start Learning"
        },{
            timeout: 2000
        });
        // screen.debug();
        expect(startLearLearningBtn).toBeInTheDocument();
    })
});