import { useEffect, useRef, useState } from 'react';

const useActiveMarker = () => {
  const [markerLeft, setMarkerLeft] = useState(0);
  const [activeMenu, setActiveMenu] = useState(null);
  const [markerWidth, setMarkerWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const currentActiveLink = ref.current?.querySelector(`[data-to="${activeMenu}"]`);

    setMarkerWidth(currentActiveLink?.offsetWidth);
    setMarkerLeft(currentActiveLink?.offsetLeft);
  }, [activeMenu]);

  return {
    ref,
    setActiveMenu,
    markerWidth,
    markerLeft,
  };
};

export default useActiveMarker;
