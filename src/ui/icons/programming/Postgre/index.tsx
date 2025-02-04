const PostgreSQL = () => {
  const strokeWidth = {
    strokeWidth: "1.369",
  }
  const stroke = {
    stroke: "#fff",
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="10 6 300 46"
      className="w-[90px]"
    >
      <path
        d="M86.088 30.193H74.484v-11.67h12.234c4.478 0 6.717 1.975 6.717 5.926 0 3.83-2.45 5.746-7.347 5.746m8.34-11.808c-1.6-1.424-3.815-2.136-6.674-2.136l-16.618.092v27.92h3.348l-.03-11.886H86.82c3.1 0 5.542-.712 7.323-2.136s2.672-3.4 2.672-5.927-.795-4.502-2.385-5.927zM116.1 38.4a5.72 5.72 0 0 1-1.589 2.375c-1.5 1.464-3.788 2.195-6.866 2.195-2.78 0-4.912-.7-6.4-2.134s-2.233-3.327-2.233-5.713c0-1.242.195-2.345.584-3.307s.954-1.774 1.694-2.436c1.54-1.403 3.658-2.105 6.356-2.105 5.976 0 8.965 2.616 8.965 7.848 0 1.243-.17 2.335-.5 3.277m.607-10.3c-2.04-1.86-5.06-2.8-9.062-2.8-3.78 0-6.702.95-8.762 2.85-1.86 1.72-2.8 4.04-2.8 6.962 0 2.9.96 5.24 2.88 7.02 1.06.96 2.295 1.656 3.706 2.086s3.066.645 4.966.645c3.98 0 7-.92 9.092-2.76 1.86-1.68 2.8-4 2.8-6.992 0-3-.94-5.34-2.82-7.022zm25.318 11.107c0 3.758-3.367 5.637-10.1 5.637-2.058 0-3.792-.13-5.2-.392s-2.553-.695-3.432-1.298a5.02 5.02 0 0 1-1.619-1.8c-.4-.74-.66-1.67-.78-2.8l3.133-.03c0 1.48.548 2.568 1.645 3.268 1.177.84 3.26 1.26 6.253 1.26 4.706 0 7.06-1.18 7.06-3.538 0-1.38-.8-2.328-2.368-2.85-.32-.1-2.223-.365-5.7-.794s-5.66-.815-6.518-1.155c-1.858-.74-2.787-2.07-2.787-3.988 0-1.88.83-3.28 2.5-4.198.82-.38 1.845-.674 3.076-.885s2.656-.315 4.276-.315c6.482 0 9.723 2.034 9.723 6.1h-2.98c0-2.86-2.28-4.3-6.835-4.3-2.318 0-4.047.3-5.186.87s-1.708 1.47-1.708 2.67c0 1.12.77 1.93 2.308 2.43.9.26 2.968.56 6.206.9 2.898.26 4.887.63 5.966 1.1 2.06.8 3.088 2.16 3.088 4.077zm12.306 5.093l-1.275.18-.795.06c-2.04 0-3.5-.295-4.413-.887s-1.353-1.627-1.353-3.1V27.798H142.8v-1.874h3.687l.03-6.02h2.856v6.02h4.974v1.904l-4.974-.03v12.397c0 .923.245 1.56.735 1.9s1.364.526 2.624.526c.18.02.38.014.6-.02a10.55 10.55 0 0 0 .99-.226l.03 1.9zm19.755-4.23c-.78.64-1.668 1.128-2.667 1.47s-2.148.5-3.446.5c-5.974 0-8.96-2.467-8.96-7.4 0-2.297.764-4.095 2.293-5.394s3.68-1.948 6.458-1.948c2.797 0 4.92.655 6.368 1.963s2.173 3.062 2.173 5.26c0 2.397-.74 4.245-2.218 5.543m5.075-14.135h-2.856l-.03 3.15c-1.26-1.28-2.16-2.087-2.7-2.427-1.6-.88-3.668-1.318-6.207-1.318-3.718 0-6.558.85-8.516 2.548-1.86 1.56-2.788 3.817-2.788 6.774 0 1.46.235 2.762.705 3.9s1.156 2.123 2.057 2.922c1.962 1.638 4.735 2.458 8.32 2.458 4.304 0 7.357-1.177 9.16-3.532v3.26c0 2.08-.655 3.688-1.964 4.828s-3.463 1.7-6.462 1.7c-2.82 0-4.828-.4-6.027-1.164-.9-.597-1.52-1.632-1.86-3.105h-2.94c.32 2.057 1.2 3.545 2.6 4.463 1.64 1.058 4.4 1.587 8.3 1.587 7.46 0 11.2-2.773 11.2-8.32V25.937zm15.45 1.853c-.86-.14-1.658-.2-2.396-.2-4.695 0-7.042 2.575-7.042 7.723v8.954h-2.826l-.03-18.322 2.857.028v3.27h.15c.48-1.288 1.24-2.265 2.278-2.93 1.138-.644 2.836-.966 5.094-.966h1.917v2.46zm2.657 6.158c.36-2.082 1.17-3.694 2.427-4.836.82-.66 1.75-1.157 2.788-1.487s2.2-.496 3.508-.496c2.538 0 4.6.696 6.22 2.088s2.412 2.97 2.412 4.73H197.28m17.633-5.652c-1-1.003-2.24-1.744-3.72-2.226s-3.2-.722-5.2-.722c-3.7 0-6.57.86-8.612 2.58s-3.06 4.06-3.06 7.022.98 5.3 2.94 7.05c2.12 1.92 5.1 2.88 8.968 2.88 1.54 0 2.963-.175 4.273-.523s2.455-.842 3.434-1.48c1.72-1.235 2.808-2.76 3.27-4.57h-3.088c-1.06 3.133-3.697 4.7-7.914 4.7-2.978 0-5.267-.766-6.865-2.298-1.38-1.313-2.068-3.014-2.068-5.104h20.363c0-3.108-.9-5.545-2.73-7.3z"
        fill="#FFFFFF"
      />
      <path
        d="M247.82 36.776c0 5.44-4.387 8.16-13.162 8.16-5.257 0-9.095-.937-11.513-2.8-1.98-1.54-2.968-3.888-2.968-7.048h3.532c0 5.078 3.65 7.617 10.948 7.617 3.5 0 6.03-.52 7.6-1.558 1.32-.918 1.98-2.357 1.98-4.314 0-1.938-.9-3.296-2.7-4.076-1.02-.42-3.5-.95-7.47-1.588-4.98-.76-8.208-1.518-9.688-2.277-2.14-1.12-3.2-3.017-3.2-5.694 0-2.497.9-4.355 2.73-5.574 1.96-1.338 5.32-2.008 10.078-2.008 8.6 0 12.9 2.856 12.9 8.568h-3.563c0-4.28-3.193-6.418-9.578-6.418-3.203 0-5.545.43-7.026 1.3-1.402.92-2.1 2.27-2.1 4.05 0 1.86.9 3.17 2.7 3.93.96.44 3.78 1.05 8.46 1.83 4.4.66 7.37 1.43 8.9 2.3 2.1 1.08 3.15 2.95 3.15 5.6zm28.7 2.776c-1.32 1.057-2.812 1.85-4.473 2.38s-3.523.793-5.584.793c-4.204 0-7.6-1.133-10.194-3.398s-3.887-5.284-3.887-9.057c0-3.932 1.285-6.996 3.857-9.192s5.98-3.293 10.223-3.293c4.303 0 7.686 1.148 10.148 3.443 1.3 1.12 2.26 2.426 2.882 3.923s.93 3.204.93 5.12c0 3.912-1.302 7.006-3.904 9.28m1.878 1.852c1.84-1.298 3.202-2.87 4.083-4.718s1.322-3.98 1.322-6.398c0-4.335-1.44-7.8-4.32-10.428-1.54-1.438-3.4-2.507-5.58-3.206s-4.67-1.05-7.47-1.05c-5.44 0-9.7 1.32-12.8 3.955s-4.65 6.212-4.65 10.727c0 4.394 1.564 7.94 4.693 10.636s7.403 4.045 12.82 4.045c2.12 0 3.968-.143 5.547-.43s2.92-.727 4.02-1.32l5.218 3.617 2.18-2.002-5.053-3.427zm31.85 2.857H286.1V16.3l3.318-.06v25.677h20.848l-.03 2.334z"
        fill="#367faf"
      />
      <path
        d="M48.237 39.567c.336-2.37.235-2.718 2.318-2.334l.53.04c1.602.062 3.697-.218 4.928-.703 2.65-1.042 4.22-2.782 1.608-2.325-5.96 1.042-6.37-.67-6.37-.67 6.293-7.915 8.924-17.963 6.654-20.423C51.7 6.445 40.99 9.617 40.8 9.7l-.057.01c-1.178-.207-2.496-.33-3.976-.35-2.697-.038-4.743.6-6.296 1.597 0 0-19.126-6.68-18.236 8.4.19 3.208 5.425 24.273 11.668 17.91 2.282-2.327 4.488-4.294 4.488-4.294a6.6 6.6 0 0 0 3.781.818l.106-.077c-.033.29-.02.57.043.906-1.608 1.523-1.136 1.79-4.352 2.352-3.253.568-1.342 1.58-.094 1.845 1.513.32 5.013.775 7.378-2.03l-.094.32c.63.428.588 3.075.678 4.967s.24 3.657.694 4.698.992 3.72 5.218 2.954c3.532-.642 6.233-1.565 6.48-10.155"
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="4.108"
      />
      <path
        d="M57.62 34.244c-5.96 1.042-6.37-.67-6.37-.67 6.293-7.916 8.924-17.964 6.654-20.423C51.71 6.444 40.99 9.617 40.8 9.7l-.058.01c-1.178-.207-2.496-.33-3.977-.35-2.697-.037-4.743.6-6.295 1.597 0 0-19.127-6.68-18.237 8.4.19 3.208 5.424 24.274 11.668 17.91 2.282-2.327 4.487-4.294 4.487-4.294a6.6 6.6 0 0 0 3.781.818l.107-.077c-.033.29-.018.57.043.906-1.608 1.523-1.136 1.79-4.35 2.352-3.254.568-1.342 1.58-.094 1.845 1.513.32 5.013.775 7.378-2.03l-.094.32c.63.428 1.073 2.783 1 4.92s-.124 3.6.373 4.746.992 3.72 5.22 2.954c3.532-.642 5.363-2.304 5.617-5.078.18-1.972.59-1.68.615-3.443l.328-.834c.378-2.673.06-3.535 2.236-3.134l.53.04c1.602.062 3.698-.218 4.928-.703 2.65-1.042 4.22-2.782 1.608-2.325z"
        fill="#417ba2"
      />
      <g
        fill="none"
        style={{
          ...strokeWidth,
          ...stroke,
        }}
      >
        <g style={{ strokeLinecap: "round", strokeLinejoin: "round" }}>
          <path
            d="M35.518 35.777c-.164 4.973.04 9.982.615 11.2s1.804 3.585 6.032 2.817c3.532-.642 4.817-1.884 5.374-4.626.4-2.017 1.203-7.62 1.304-8.767M30.45 10.843S11.3 4.213 12.2 19.3c.2 3.208 5.424 24.274 11.67 17.9 2.282-2.327 4.345-4.152 4.345-4.152M40.8 9.633c-.663.176 10.647-3.504 17.074 3.457 2.27 2.46-.36 12.508-6.654 20.424"
            style={{ strokeLinejoin: "round" }}
          />
          <path
            d="M51.21 33.513s.4 1.71 6.37.668c2.612-.457 1.04 1.283-1.61 2.326-2.174.855-7.048 1.074-7.127-.107-.205-3.05 2.565-2.123 2.365-2.887-.18-.688-1.42-1.363-2.24-3.047-.715-1.47-9.81-12.742 2.522-11.068.452-.08-3.217-9.944-14.76-10.104s-11.16 12.03-11.16 12.03"
            strokeLinejoin="bevel"
          />
        </g>
        <g style={{ strokeLinejoin: "round" }}>
          <path d="M32.288 34.556c-1.61 1.523-1.136 1.79-4.352 2.352-3.254.57-1.342 1.58-.094 1.845 1.513.32 5.013.775 7.378-2.032.72-.855-.004-2.22-.993-2.566-.478-.168-1.117-.378-1.94.4z" />
          <path
            d="M32.183 34.53c-.162-.896.347-1.96.893-3.208.82-1.87 2.712-3.742 1.2-9.677-1.128-4.423-8.697-.92-8.7-.32s.342 3.04-.127 5.88c-.612 3.708 2.783 6.843 6.692 6.523"
            style={{ strokeLinecap: "round" }}
          />
        </g>
      </g>
      <g
        fill="#fff"
        style={{
          ...stroke,
        }}
      >
        <path
          d="M30.382 21.233c-.034.205.443.75 1.064.824s1.15-.354 1.185-.558-.442-.43-1.064-.504-1.152.034-1.185.238z"
          strokeWidth=".456"
        />
        <path
          d="M49.273 20.816c.034.205-.442.75-1.064.824s-1.152-.354-1.186-.56.443-.43 1.064-.504 1.15.033 1.185.238z"
          strokeWidth=".228"
        />
      </g>
      <path
        d="M51.493 19.398c.102 1.607-.408 2.7-.473 4.412-.095 2.486 1.398 5.33-.852 8.18"
        fill="none"
        style={{
          ...strokeWidth,
          ...stroke,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
    </svg>
  )
}

export default PostgreSQL
