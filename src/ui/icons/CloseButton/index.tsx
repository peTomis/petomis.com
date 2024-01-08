interface Props {
  size?: number
}

const CloseButtonIcon = ({ size }: Props) => {
  return (
    <svg
      width={size ?? 42}
      height={size ?? 42}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 1436 1054"
    >
      <path
        d="M718.5,453.8l224-224.3c20.4-20.4,53.3-20.4,73.6,0c20.4,20.4,20.4,53.3,0,73.6l-224,224.6l224,224
            c20.4,20.4,20.4,53.3,0,73.6c-20.4,20.4-53.3,20.4-73.6,0l-224-224l-224.6,224c-20.4,20.4-53.3,20.4-73.6,0
            c-20.4-20.4-20.4-53.3,0-73.6l224-224L420.4,303.2c-20.5-20.4-20.5-53.3-0.1-73.6s53.3-20.4,73.6,0l224.6,224V453.8z"
      />
    </svg>
  )
}

export default CloseButtonIcon
