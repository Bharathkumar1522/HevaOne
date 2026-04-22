import { type ReactNode, type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function BaseIcon({ size = 18, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <path
        d="M12 2l9 4.5-9 4.5-9-4.5 9-4.5z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
      />
      <path d="M3 11l9 4.5 9-4.5" />
      <path d="M3 15.5l9 4.5 9-4.5" />
    </BaseIcon>
  );
}

export function IconShield(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIcon>
  );
}

export function IconDevice(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <rect
        x="2"
        y="4"
        width="20"
        height="13"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </BaseIcon>
  );
}

export function IconClock(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.18" />
      <path d="M12 7.5V12l3 1.8" />
    </BaseIcon>
  );
}

export function IconChat(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <path
        d="M20 7v8a2 2 0 0 1-2 2h-4l-4 4v-4H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </BaseIcon>
  );
}

export function IconDocument(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <path
        d="M7 3h7.5L19 7.5V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </BaseIcon>
  );
}

export function IconCurrency(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.18" />
      <path d="M12 7.5v9" />
      <path d="M9.5 9.5c.5-1 1.5-1.5 2.5-1.5 1.5 0 2.5 1 2.5 2s-1 1.5-2.5 2-2.5 1-2.5 2 1 2 2.5 2c1 0 2-.5 2.5-1.5" />
    </BaseIcon>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <path
        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <circle cx="12" cy="10" r="3" fill="currentColor" />
    </BaseIcon>
  );
}

export function IconLock(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <rect
        x="4"
        y="11"
        width="16"
        height="11"
        rx="2"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16.5" r="1.5" fill="currentColor" />
    </BaseIcon>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <BaseIcon strokeWidth="1.5" {...props}>
      <path
        d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M18.5 14L19.2 15.6L20.8 16.3L19.2 17L18.5 18.6L17.8 17L16.2 16.3L17.8 15.6L18.5 14Z"
        fill="currentColor"
      />
    </BaseIcon>
  );
}

export function IconX(props: IconProps) {
  return (
    <BaseIcon strokeWidth="2.5" {...props}>
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIcon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <BaseIcon strokeWidth="2.5" {...props}>
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIcon>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <BaseIcon strokeWidth="2" {...props}>
      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIcon>
  );
}
