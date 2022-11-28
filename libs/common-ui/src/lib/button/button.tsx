import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <div className="rounded-lg overflow-hidden">
      <button
        className={classNames(
          'bg-primary text-white px-10 py-5 rounded-lg hover:bg-teal-300',
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
