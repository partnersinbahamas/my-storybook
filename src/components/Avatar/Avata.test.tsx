import userEvent from "@testing-library/user-event";
import { Avatar } from "./Avatar";
import { render, screen } from "@testing-library/react";
import { YELLOW_600 } from "../Colors/colors";

describe('Avatar', () => {
  const user = userEvent.setup();

  const firstName = 'Denys';
  const lastName = 'Bokov';
  const size: TSizes = 'medium';
    
  it('renders correclty', () => {
    const { container } = render(
      <Avatar
        size={size}
        firstName={firstName}
        lastName={lastName}
      />
    );
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveClass('medium');

    const nameElement = screen.getByTestId('avatar-name');
    expect(nameElement).toHaveTextContent(`${firstName[0]}${lastName[0]}`);
    expect(container).toMatchSnapshot();
  });
  it('renders with background color', () => {
    const bgc = YELLOW_600;
    const { container } = render(
      <Avatar
        size={size}
        firstName={firstName}
        lastName={lastName}
        backgroundColor={bgc}
      />
    );
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toHaveStyle(`backgroundColor: ${bgc}`);
    expect(container).toMatchSnapshot();
  });
  it('renders on click', async() => {
    const onClickHandler = jest.fn();

    render(
      <Avatar
        size={size}
        firstName={firstName}
        lastName={lastName}
        onClick={onClickHandler}
      />
    );

    const avatarElement = screen.getByTestId('avatar');
    await user.click(avatarElement);
    expect(onClickHandler).toHaveBeenCalled();
  })
})