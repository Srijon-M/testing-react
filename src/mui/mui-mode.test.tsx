import { render, screen } from '../test-utils';
import { MuiMode } from './mui-mode';

describe("MuiMode", () => {
    test("component renders correctly", () => {
        render(<MuiMode />);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
    });
});