import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface AnalyticsState {
    hoverEvents: number;
    clicks: number;
}

type AnalyticsAction =
    | { type: 'LOG_HOVER' }
    | { type: 'LOG_CLICK' };

interface AnalyticsContextType {
    state: AnalyticsState;
    dispatch: React.Dispatch<AnalyticsAction>;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

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

export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(analyticsReducer, { hoverEvents: 0, clicks: 0 });

    return (
        <AnalyticsContext.Provider value={{ state, dispatch }}>
            {children}
        </AnalyticsContext.Provider>
    );
};

export const useAnalytics = () => {
    const context = useContext(AnalyticsContext);
    if (!context) {
        throw new Error('useAnalytics debe usarse dentro de un AnalyticsProvider');
    }
    return context;
};