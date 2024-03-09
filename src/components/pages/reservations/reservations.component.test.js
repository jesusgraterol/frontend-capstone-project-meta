import { render, screen } from '@testing-library/react';
import Reservations from './reservations.component';

describe("Reservations component", () => {
  it("renders correct heading", () => {
    render(<Reservations />);
    expect(screen.getByRole("heading").textContent).toMatch('Reservations');
  });
});