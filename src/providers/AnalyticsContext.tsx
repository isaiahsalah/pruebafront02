import React, { createContext, useReducer, useContext, ReactNode } from 'react';

// Definir la interfaz del estado
interface AnalyticsState {
    hoverEvents: number;
    clicks: number;
}

// Definir las acciones
type AnalyticsAction =
    | { type: 'LOG_HOVER' }
    | { type: 'LOG_CLICK' };

// Definir el tipo del contexto
interface AnalyticsContextType {
    state: AnalyticsState;
    dispatch: React.Dispatch<AnalyticsAction>;
}

// Crear el contexto
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

// Reducer para manejar las acciones
const analyticsReducer = (state: AnalyticsState, action: AnalyticsAction): AnalyticsState => {
    switch (action.type) {
        case 'LOG_HOVER':
            return { ...state, hoverEvents: state.hoverEvents + 1 };
        case 'LOG_CLICK':
            return { ...state, clicks: state.clicks + 1 };
        default:
            return state;
    }
};

// Proveedor del contexto
export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(analyticsReducer, { hoverEvents: 0, clicks: 0 });

    return (
        <AnalyticsContext.Provider value={{ state, dispatch }}>
            {children}
        </AnalyticsContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useAnalytics = () => {
    const context = useContext(AnalyticsContext);
    if (!context) {
        throw new Error('useAnalytics debe usarse dentro de un AnalyticsProvider');
    }
    return context;
};